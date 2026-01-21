//+------------------------------------------------------------------+
//|                                              Williams_Verifier.mq5 |
//|                                                     Developer Name |
//|                                             https://www.mql5.com |
//+------------------------------------------------------------------+
#property copyright "Developer Name"
#property link      "https://www.mql5.com"
#property version   "1.00"
#property description "Expert Advisor based on Williams %R indicator"

//--- Input parameters
input int      WPR_Period        = 14;        // Williams %R Period
input double   OverboughtLevel   = -20.0;     // Overbought level
input double   OversoldLevel     = -80.0;     // Oversold level
input double   LotSize           = 0.1;       // Lot size
input int      StopLossPips      = 50;        // Stop Loss in pips
input int      TakeProfitPips    = 100;       // Take Profit in pips
input int      MagicNumber       = 12345;     // Magic number for orders
input int      Slippage          = 5;         // Slippage in points

//--- Global variables
int      wpr_handle;                          // Handle for Williams %R indicator

//+------------------------------------------------------------------+
//| Expert initialization function                                   |
//+------------------------------------------------------------------+
int OnInit()
  {
//--- Create Williams %R indicator handle
   wpr_handle = iWPR(Symbol(), Period(), WPR_Period);
   if(wpr_handle == INVALID_HANDLE)
     {
      Print("Failed to create Williams %R indicator handle. Error: ", GetLastError());
      return(INIT_FAILED);
     }

//---
   return(INIT_SUCCEEDED);
  }

//+------------------------------------------------------------------+
//| Expert deinitialization function                                 |
//+------------------------------------------------------------------+
void OnDeinit(const int reason)
  {
//---
   if(wpr_handle != INVALID_HANDLE)
     {
      IndicatorRelease(wpr_handle);
     }
  }

//+------------------------------------------------------------------+
//| Expert tick function                                             |
//+------------------------------------------------------------------+
void OnTick()
  {
   double wpr_current[];
   double wpr_previous[];

//--- Get latest Williams %R values
   if(CopyBuffer(wpr_handle, 0, 1, 2, wpr_current) <= 0 || CopyBuffer(wpr_handle, 0, 2, 2, wpr_previous) <= 0)
     {
      Print("Failed to get Williams %R values. Error: ", GetLastError());
      return;
     }

   double current_wpr = wpr_current[0];
   double previous_wpr = wpr_previous[0];

//--- Check for open positions
   if(PositionsTotal() == 0)
     {
      //--- Buy signal: WPR crosses above OversoldLevel from below
      if(previous_wpr < OversoldLevel && current_wpr >= OversoldLevel)
        {
         OpenBuyOrder();
        }
      //--- Sell signal: WPR crosses below OverboughtLevel from above
      else if(previous_wpr > OverboughtLevel && current_wpr <= OverboughtLevel)
        {
         OpenSellOrder();
        }
     }
   else
     {
      for(int i = PositionsTotal() - 1; i >= 0; i--)
        {
         ulong ticket = PositionGetTicket(i);
         if(ticket > 0)
           {
            long position_type = PositionGetInteger(POSITION_TYPE);

            // Close buy if WPR crosses below OverboughtLevel
            if(position_type == POSITION_TYPE_BUY && previous_wpr > OverboughtLevel && current_wpr <= OverboughtLevel)
              {
               ClosePosition(ticket);
              }
            // Close sell if WPR crosses above OversoldLevel
            else if(position_type == POSITION_TYPE_SELL && previous_wpr < OversoldLevel && current_wpr >= OversoldLevel)
              {
               ClosePosition(ticket);
              }
           }
        }
     }
  }

//+------------------------------------------------------------------+
//| Open Buy Order                                                   |
//+------------------------------------------------------------------+
void OpenBuyOrder()
  {
   MqlTradeRequest request;
   MqlTradeResult  result;
   ZeroMemory(request);

   request.action      = TRADE_ACTION_DEAL;
   request.symbol      = Symbol();
   request.volume      = LotSize;
   request.type        = ORDER_TYPE_BUY;
   request.price       = SymbolInfoDouble(Symbol(), SYMBOL_ASK);
   request.deviation   = Slippage;
   request.type_filling = ORDER_FILLING_FOC;
   request.magic       = MagicNumber;

   double sl_price = request.price - StopLossPips * _Point;
   double tp_price = request.price + TakeProfitPips * _Point;

   // Adjust SL/TP for minimum levels if necessary
   if(SymbolInfoInteger(Symbol(), SYMBOL_TRADE_STOPS_LEVEL) > 0)
     {
      double min_sl_buy = SymbolInfoDouble(Symbol(), SYMBOL_ASK) + SymbolInfoInteger(Symbol(), SYMBOL_TRADE_STOPS_LEVEL) * _Point;
      double min_tp_buy = SymbolInfoDouble(Symbol(), SYMBOL_ASK) - SymbolInfoInteger(Symbol(), SYMBOL_TRADE_STOPS_LEVEL) * _Point;

      if(sl_price > min_sl_buy) sl_price = min_sl_buy; // Ensure SL is not too close
      if(tp_price < min_tp_buy) tp_price = min_tp_buy; // Ensure TP is not too close
     }

   request.sl          = NormalizeDouble(sl_price, _Digits);
   request.tp          = NormalizeDouble(tp_price, _Digits);

   if(!OrderSend(request, result))
     {
      Print("Failed to send BUY order. Error: ", GetLastError());
     }
   else
     {
      Print("BUY order sent successfully. Ticket: ", result.deal);
     }
  }

//+------------------------------------------------------------------+
//| Open Sell Order                                                  |
//+------------------------------------------------------------------+
void OpenSellOrder()
  {
   MqlTradeRequest request;
   MqlTradeResult  result;
   ZeroMemory(request);

   request.action      = TRADE_ACTION_DEAL;
   request.symbol      = Symbol();
   request.volume      = LotSize;
   request.type        = ORDER_TYPE_SELL;
   request.price       = SymbolInfoDouble(Symbol(), SYMBOL_BID);
   request.deviation   = Slippage;
   request.type_filling = ORDER_FILLING_FOC;
   request.magic       = MagicNumber;

   double sl_price = request.price + StopLossPips * _Point;
   double tp_price = request.price - TakeProfitPips * _Point;

   // Adjust SL/TP for minimum levels if necessary
   if(SymbolInfoInteger(Symbol(), SYMBOL_TRADE_STOPS_LEVEL) > 0)
     {
      double min_sl_sell = SymbolInfoDouble(Symbol(), SYMBOL_BID) - SymbolInfoInteger(Symbol(), SYMBOL_TRADE_STOPS_LEVEL) * _Point;
      double min_tp_sell = SymbolInfoDouble(Symbol(), SYMBOL_BID) + SymbolInfoInteger(Symbol(), SYMBOL_TRADE_STOPS_LEVEL) * _Point;

      if(sl_price < min_sl_sell) sl_price = min_sl_sell; // Ensure SL is not too close
      if(tp_price > min_tp_sell) tp_price = min_tp_sell; // Ensure TP is not too close
     }

   request.sl          = NormalizeDouble(sl_price, _Digits);
   request.tp          = NormalizeDouble(tp_price, _Digits);

   if(!OrderSend(request, result))
     {
      Print("Failed to send SELL order. Error: ", GetLastError());
     }
   else
     {
      Print("SELL order sent successfully. Ticket: ", result.deal);
     }
  }

//+------------------------------------------------------------------+
//| Close Position                                                   |
//+------------------------------------------------------------------+
void ClosePosition(ulong ticket)
  {
   MqlTradeRequest request;
   MqlTradeResult  result;
   ZeroMemory(request);

   if(PositionSelectByTicket(ticket))
   {
       request.action      = TRADE_ACTION_DEAL;
       request.position    = ticket;
       request.symbol      = PositionGetString(POSITION_SYMBOL);
       request.deviation   = Slippage;
       request.type_filling = ORDER_FILLING_FOC;
    
       if(PositionGetInteger(POSITION_TYPE) == POSITION_TYPE_BUY)
         {
          request.type  = ORDER_TYPE_SELL;
          request.price = SymbolInfoDouble(request.symbol, SYMBOL_BID);
          request.volume = PositionGetDouble(POSITION_VOLUME);
         }
       else if(PositionGetInteger(POSITION_TYPE) == POSITION_TYPE_SELL)
         {
          request.type  = ORDER_TYPE_BUY;
          request.price = SymbolInfoDouble(request.symbol, SYMBOL_ASK);
          request.volume = PositionGetDouble(POSITION_VOLUME);
         }
       else
         {
          Print("Invalid position type for closing.");
          return;
         }
    
       if(!OrderSend(request, result))
         {
          Print("Failed to close position ", ticket, ". Error: ", GetLastError());
         }
       else
         {
          Print("Position ", ticket, " closed successfully. Deal: ", result.deal);
         }
   }
   else
   {
       Print("Failed to select position with ticket ", ticket, ". Error: ", GetLastError());
   }
  }
//+------------------------------------------------------------------+
