export default function NewsElement() {
    return (
        
        <div className="h-[250px] w-fit">
           <iframe
              scrolling="no"
              allowtransparency="true"
              frameBorder="0"
              src="https://www.tradingview-widget.com/embed-widget/timeline/?locale=en#%7B%22isTransparent%22%3Afalse%2C%22displayMode%22%3A%22regular%22%2C%22width%22%3A400%2C%22height%22%3A550%2C%22colorTheme%22%3A%22dark%22%2C%22utm_source%22%3A%22www.tradingview.com%22%2C%22utm_medium%22%3A%22widget_new%22%2C%22utm_campaign%22%3A%22timeline%22%2C%22page-uri%22%3A%22www.tradingview.com%2Fwidget-wizard%2Fen%2Fdark%2Ftimeline%2F%22%7D"
              title="timeline TradingView widget"
              lang="en"
              style={{
                userSelect: "none",
                boxSizing: "border-box",
                display: "block",
                height: 500,
                width: 500
              }}
            ></iframe>
        </div>
    );
};