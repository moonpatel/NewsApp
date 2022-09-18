const articles = [
    {
        status: "ok",
        totalResults: 70,
        articles: [
            {
                source: { id: null, name: "Livemint" },
                author: "Vipul Das",
                title: "₹3 to ₹1240: Multibagger CDGS stock turns ₹1 lakh to ₹3 Cr: Buy? | Mint - Mint",
                description:
                    "With a market worth of  ₹19,714.58 crore, Kajaria Ceramics Ltd. is a mid-cap company that operates in the consumer discretionary goods and services (CDGS) industry",
                url: "https://www.livemint.com/market/stock-market-news/rs-3-to-rs-1240-multibagger-cdgs-stock-turns-rs-1-lakh-to-rs-3-cr-buy-11663415720908.html",
                urlToImage:
                    "https://images.livemint.com/img/2022/09/17/600x338/2020-08-06T041410Z_1_LYNXNPEG7505T_RTROPTP_3_INDIA-BUDGET_1601436451751_1663415787049_1663415787049.JPG",
                publishedAt: "2022-09-17T12:01:08Z",
                content:
                    "With a market worth of 19,714.58 crore, Kajaria Ceramics Ltd. is a mid-cap company that operates in the consumer discretionary goods and services (CDGS) industry. Kajaria is India's top producer of c… [+6413 chars]",
            },
            {
                source: { id: null, name: "Livemint" },
                author: "Vipul Das",
                title: "With high promoter & FII holdings, this stock sets record date for bonus shares | Mint - Mint",
                description:
                    "With a market valuation of  ₹1,954.32 crore, Insecticides India Ltd (IIL) is a small cap company that operates in the commodity industry",
                url: "https://www.livemint.com/market/stock-market-news/with-high-promoter-fii-holdings-this-stock-sets-record-date-for-bonus-shares-11663407077450.html",
                urlToImage:
                    "https://images.livemint.com/img/2022/09/17/600x338/2021-06-29T041241Z_1_LYNXNPEH5S05Q_RTROPTP_3_MARKETS-INDIA-STOCKS_1628855080542_1663407107441_1663407107441.JPG",
                publishedAt: "2022-09-17T09:34:55Z",
                content:
                    "With a market valuation of 1,954.32 crore, Insecticides India Ltd (IIL) is a small-cap company that operates in the commodity industry. Insecticides (India) is among the leading brands in the crop pr… [+2119 chars]",
            },
            {
                source: { id: null, name: "Livemint" },
                author: "Asit Manohar",
                title: "Harsha Engineers IPO: What GMP signals after strong subscription? | Mint - Mint",
                description: "Harsha Engineers IPO GMP today is  ₹235, say market observers",
                url: "https://www.livemint.com/market/ipo/harsha-engineers-ipo-what-gmp-signals-after-strong-subscription-11663404027329.html",
                urlToImage:
                    "https://images.livemint.com/img/2022/09/17/600x338/Harsha_Engineers_IPO_GMP_today_Web_1663404147159_1663404155490_1663404155490.JPG",
                publishedAt: "2022-09-17T08:47:47Z",
                content:
                    "Harsha Engineers IPO: After three days subscription of the public issue worth 755 crore, Harsha Engineers IPO subscription status reflects that the issue has received strong response from investors. … [+3032 chars]",
            },
            {
                source: { id: null, name: "Livemint" },
                author: "Asit Manohar",
                title: "Parag Parikh Flexi Cap Fund portfolio: 3 latest developments you should know | Mint - Mint",
                description: "Parag Parikh Flexi Cap Fund has added NDMC in its portfolio in August 2022",
                url: "https://www.livemint.com/money/personal-finance/parag-parikh-flexi-cap-fund-portfolio-3-latest-developments-you-should-know-11663401165038.html",
                urlToImage:
                    "https://images.livemint.com/img/2022/09/17/600x338/Parag_Parikh_Flexi_Cap_Fund_portfolio_iStock_1663401375171_1663401383235_1663401383235.jpg",
                publishedAt: "2022-09-17T08:00:37Z",
                content:
                    "Parag Parikh Flexi Cap Fund portfolio: The open-ended equity scheme that enables an investor to diversify one's portfolio through overseas equity investments has gone through three major changes in A… [+2106 chars]",
            },
            {
                source: { id: null, name: "Analytics Insight" },
                author: null,
                title: "Cardano, Aave, and Big Eyes: Popular Tokens With High Profit Potentials - Analytics Insight",
                description: null,
                url: "https://www.analyticsinsight.net/cardano-aave-and-big-eyes-popular-tokens-with-high-profit-potentials/",
                urlToImage: null,
                publishedAt: "2022-09-17T07:43:35Z",
                content: null,
            },
            {
                source: { id: null, name: "NDTV News" },
                author: null,
                title: "Forex Reserves Have Fallen Over $80 Billion Since Ukraine Crisis To 2-Year Low - NDTV Profit",
                description:
                    "India's forex reserves have nosedived over $80 billion since the Ukraine crisis, with more than $2 billion fall in the latest week.",
                url: "https://www.ndtv.com/business/forex-reserves-have-fallen-over-80-billion-since-ukraine-crisis-3352763",
                urlToImage: "https://c.ndtvimg.com/2022-09/qf3c63f8_image_625x300_17_September_22.jpg",
                publishedAt: "2022-09-17T06:56:50Z",
                content:
                    "Forex reserves fell for six straight weeks to almost a two-year low.\r\nIndia's forex reserves have nosedived over $80 billion since the Ukraine crisis, with more than $2 billion fall in the latest wee… [+3759 chars]",
            },
            {
                source: { id: null, name: "Livemint" },
                author: "Asit Manohar",
                title: "Dividend paying stock: Baba Ramdev-backed stock to trade ex-dividend next week | Mint - Mint",
                description:
                    "Baba Ramdev-backed dividend paying stock will trade ex-dividend on 23rd September 2022 i.e.  Friday next week",
                url: "https://www.livemint.com/market/stock-market-news/dividend-paying-stock-baba-ramdev-backed-stock-to-trade-ex-dividend-next-week-11663395706563.html",
                urlToImage:
                    "https://images.livemint.com/img/2022/09/17/600x338/PTI08_04_2021_000192A_1628768026307_1663396230661_1663396230661.jpg",
                publishedAt: "2022-09-17T06:39:10Z",
                content:
                    "Dividend paying stock: Baba Ramdev-backed Patanjali Foods Ltd is going to trade ex-dividend today. The board of directors of the company has announced final dividend of 5 per equity share for the fin… [+2295 chars]",
            },
            {
                source: { id: "the-times-of-india", name: "The Times of India" },
                author: "Nikhil Agarwal",
                title: "20 stocks that helped PMS investors bag double-digit returns last month - The Economic Times",
                description:
                    "The thematic fund that gained 13.65 per cent in August is betting on JSW Energy in a big way as it is its biggest holding with a weightage of 9.78 per cent. Other top holdings include Titagarh Wagons, Time Technoplast, J Kumar Infraprojects and SP Apparels.",
                url: "https://economictimes.indiatimes.com/markets/stocks/news/20-stocks-that-helped-pms-investors-bag-double-digit-returns-last-month/articleshow/94261209.cms",
                urlToImage:
                    "https://img.etimg.com/thumb/msid-94261316,width-1070,height-580,imgsize-84144,overlay-etmarkets/photo.jpg",
                publishedAt: "2022-09-17T05:45:00Z",
                content:
                    "NEW DELHI: PMS funds that managed to outperform their respective benchmark indices in the month of August to deliver double-digit returns for HNI investors are betting big on stocks like JSW Energy, … [+1466 chars]",
            },
            {
                source: { id: "the-times-of-india", name: "The Times of India" },
                author: "Nikhil Agarwal",
                title: "Tata stock rallies over 51% in 5 days, 9 other stocks gave double-digit returns - The Economic Times",
                description:
                    "Analysts expect mid and smallcaps to continue their outperformance in the short to medium term as they are trading reasonably well compared to largecaps and are at a discount to their historic valuation trend.",
                url: "https://economictimes.indiatimes.com/markets/stocks/news/tata-stock-rallies-over-51-in-5-days-9-other-stocks-gave-double-digit-returns/articleshow/94260990.cms",
                urlToImage:
                    "https://img.etimg.com/thumb/msid-94261013,width-1070,height-580,imgsize-33660,overlay-etmarkets/photo.jpg",
                publishedAt: "2022-09-17T05:30:00Z",
                content:
                    "NEW DELHI: Even as headline equity indices Sensex and Nifty ended with a weekly loss of 1.7 per cent, 10 BSE500 stocks gave double-digit returns to investors with leading the pack with an impressive … [+1745 chars]",
            },
            {
                source: { id: null, name: "Livemint" },
                author: "Asit Manohar",
                title: "Vijay Kedia's advice for retail investors on how to overcome market volatility | Mint - Mint",
                description:
                    "Vijay Kedia told Livemint that short term crisis is a big time opportunity for long term investors",
                url: "https://www.livemint.com/market/stock-market-news/vijay-kedia-s-advice-for-retail-investors-on-how-to-overcome-market-volatility-11663389477194.html",
                urlToImage:
                    "https://images.livemint.com/img/2022/09/17/600x338/Vijay_Kedia_1_twitter_1663390749927_1663390759391_1663390759391.jpg",
                publishedAt: "2022-09-17T05:17:48Z",
                content:
                    "After bloodbath on Dalal Street, ace investor Vijay Kedia has shared the art on how to overcome this market volatility. While talking to Livemint in an exclusive conversation, the market magnet told … [+2645 chars]",
            },
            {
                source: { id: null, name: "Livemint" },
                author: "Sounak Mukhopadhyay",
                title: "Byju’s $22-billion valuation makes no sense to Harsh Goenka; Kiran Mazumdar-Shaw agrees | Mint - Mint",
                description:
                    "Harsh Goenka and Kiran Mazumdar-Shaw seem to be confused about how Byju’s is valued at $22 billion.",
                url: "https://www.livemint.com/news/india/byjus-22-billion-valuation-makes-no-sense-to-harsh-goenka-kiran-mazumdar-shaw-agrees-11663390804755.html",
                urlToImage:
                    "https://images.livemint.com/img/2022/09/17/600x338/Valuation-john-schnobrich-FlPc9_VocJ4-unsplash_1663391451287_1663391456354_1663391456354.jpg",
                publishedAt: "2022-09-17T05:11:36Z",
                content:
                    "One of Indias most valuable startups, Byjus, has grabbed the attention of Harsh Goenka and Kiran Mazumdar-Shaw, but for all the wrong reasons. Two of Indias most prominent business personalities seem… [+2489 chars]",
            },
            {
                source: { id: "the-times-of-india", name: "The Times of India" },
                author: "Rajesh Mascarenhas",
                title: "Adani Group pips Tata Group in m-cap - The Economic Times",
                description:
                    "Excluding ACC and Ambuja Cement, the Adani Group's m-cap has increased by nearly ₹10.16 lakh crore this year thanks to the sharp run-up in stock prices of most of its companies. During this period, Tata Group has lost ₹2.57 lakh crore in market cap as its fla…",
                url: "https://economictimes.indiatimes.com/markets/stocks/news/adani-group-pips-tata-group-in-m-cap/articleshow/94260178.cms",
                urlToImage:
                    "https://img.etimg.com/thumb/msid-94260203,width-1070,height-580,imgsize-65114,overlay-etmarkets/photo.jpg",
                publishedAt: "2022-09-17T04:43:00Z",
                content:
                    "Adani Group has become India's most valuable business house in terms of market value of its companies, surpassing the Tata Group. The completion of the acquisition of Ambuja Cement and helped Adani o… [+1487 chars]",
            },
            {
                source: { id: "the-times-of-india", name: "The Times of India" },
                author: "ET Bureau",
                title: "Adani Group to infuse Rs 20,000 crore into Ambuja Cements via preferential share allotment - Economic Times",
                description:
                    "Adani brought back former Ambuja Cement CEO and managing director Ajay Kapur to lead the company in the same role, taking over from Neeraj Akhoury. Meanwhile, Sridhar Balakrishnan will continue to lead ACC but with a changed designation of whole-time director…",
                url: "https://economictimes.indiatimes.com/markets/companies/adani-group-to-infuse-20000-cr-into-ambuja/articleshow/94259696.cms",
                urlToImage:
                    "https://img.etimg.com/thumb/msid-94259731,width-1070,height-580,imgsize-65114,overlay-etmarkets/photo.jpg",
                publishedAt: "2022-09-17T04:09:00Z",
                content:
                    "The Adani Group, now the country's biggest conglomerate by market capitalisation, Friday completed the acquisition of and its listed subsidiary and committed more funds through a record preferential … [+4313 chars]",
            },
            {
                source: { id: null, name: "News18" },
                author: "Business Desk",
                title: "Is Today a Bank Holiday? Banks to Remain Shut for 5 Out of 13 Remaining Days This Month - News18",
                description:
                    "Bank Holidays in September, Many bank holidays are regional and may differ from state to state. Please check the bank holidays in your city before visiting the branch",
                url: "https://www.news18.com/news/business/is-today-a-bank-holiday-banks-to-remain-shut-for-5-out-of-13-remaining-days-this-month-5974915.html",
                urlToImage:
                    "https://images.news18.com/ibnlive/uploads/2022/08/bank-holidays-in-august-2022-165932540616x9.jpg",
                publishedAt: "2022-09-17T03:46:00Z",
                content:
                    "Bank Holidays in September: We have already gone past the middle of the current month, but there are a few bank holidays in September still left. Amid the onset of the festive season, there were as m… [+2807 chars]",
            },
            {
                source: { id: "the-times-of-india", name: "The Times of India" },
                author: "Kshitij Anand",
                title: "Mind Over Money: Health is real wealth! Chasing a crorepati dream is possible by investing Rs 10,000 ever - Economic Times",
                description:
                    "Wealth creation as well as significant improvement in health results for both of them shall be visible over a period of time. What's required is sticking to the routine and consistency.  You should undergo health check-ups once a year above the age of 40. Sim…",
                url: "https://economictimes.indiatimes.com/markets/expert-view/mind-over-money-health-is-real-wealth-chasing-a-crorepati-dream-is-possible-by-investing-10000-every-month/articleshow/94248924.cms",
                urlToImage:
                    "https://img.etimg.com/thumb/msid-94249324,width-1070,height-580,imgsize-52594,overlay-etmarkets/photo.jpg",
                publishedAt: "2022-09-17T03:30:00Z",
                content:
                    "It is very much possible for a youngster to set aside Rs 10,000 per month for investments. After 30 years, it would be Rs 6.92 crore which would have present value that is purchasing power of Rs 85 l… [+6734 chars]",
            },
            {
                source: { id: null, name: "NDTV News" },
                author: null,
                title: "Maharashtra Cancels Johnson's Baby Powder License, Firm Approaches Court - NDTV",
                description:
                    'Maharashtra\'s Food and Drugs Administration or FDA has cancelled the baby powder manufacturing licence of Johnson & Johnson Pvt Ltd "in the interest of public health at large."',
                url: "https://www.ndtv.com/india-news/maharashtra-cancels-johnson-johnsons-baby-powder-license-firm-approaches-court-3352376",
                urlToImage:
                    "https://c.ndtvimg.com/2020-05/ntp726p8_johnson-johnson-baby-powder-reuters_625x300_20_May_20.jpg",
                publishedAt: "2022-09-17T03:20:24Z",
                content:
                    "Maharashtra FDA has cancelled the baby powder manufacturing licence of Johnson &amp; Johnson Pvt Ltd\r\nMumbai: Maharashtra's Food and Drugs Administration or FDA has cancelled the baby powder manufact… [+1505 chars]",
            },
            {
                source: { id: null, name: "Livemint" },
                author: "Livemint",
                title: "From Colgate's candles to IKEA's pens, Anand Mahindra shares significant entrepreneurial lessons | Mint - Mint",
                description: "In a recent Twitter post, Mahindra shared some significant 'entrepreneurial' lessons",
                url: "https://www.livemint.com/news/india/from-colgate-s-candles-to-ikea-s-pens-anand-mahindra-shares-significant-entrepreneurial-lessons-11663378455956.html",
                urlToImage:
                    "https://images.livemint.com/img/2022/09/17/600x338/Anand_Mahindra_1663379275877_1663379276154_1663379276154.jpg",
                publishedAt: "2022-09-17T02:31:37Z",
                content:
                    "Anand Mahindra, who is the third generation scion of the Mahindra clan has taken the family's business to new heights. His tenure has seen the Group expand domestically and internationally into a ran… [+2597 chars]",
            },
            {
                source: { id: null, name: "Livemint" },
                author: "Asit Manohar",
                title: "₹1 lakh rises 100 times in 20 years after 3 bonus shares. Millionaire turns billionaire | Mint - Mint",
                description:
                    "ITC share price has ascended from around  ₹14.50 to  ₹331.50 apiece levels in last twenty years",
                url: "https://www.livemint.com/market/stock-market-news/rs-1-lakh-rises-100-times-in-20-years-after-3-bonus-shares-millionaire-turns-billionaire-11663379713669.html",
                urlToImage:
                    "https://images.livemint.com/img/2022/09/17/600x338/Sanjiv_1655924805233_1663379898819_1663379898819.jpg",
                publishedAt: "2022-09-17T02:01:50Z",
                content:
                    "ITC bonus shares: A successful stock market investor often found advising its followers to hold a stock as long as one can. The basic motto behind this advise is to minimise the risk and open some ot… [+2935 chars]",
            },
            {
                source: { id: null, name: "Livemint" },
                author: "Asit Manohar",
                title: "Gold rate dips ahead of US Fed meeting. Should buy in this correction? | Mint - Mint",
                description:
                    "Gold rate today: The US inflation in August rose higher at 8.3 per cent YoY against expectation of 8.1 per cent",
                url: "https://www.livemint.com/market/commodities/gold-rates-dip-ahead-of-us-fed-meeting-should-buy-in-this-correction-11663374962090.html",
                urlToImage:
                    "https://images.livemint.com/img/2022/09/17/600x338/ANI-20211102144-0_1641211226529_1663375266400_1663375266400.jpg",
                publishedAt: "2022-09-17T00:48:25Z",
                content:
                    "Gold rate today: After an unexpected and disappointing US CPI data in the week gone by, gold price witnessed huge sell-off in spot and domestic markets. The US inflation in August rose higher at 8.3 … [+4185 chars]",
            },
            {
                source: { id: "the-times-of-india", name: "The Times of India" },
                author: "ET Bureau",
                title: "Ease of doing business: 'Small company' limits relaxed further - The Economic Times",
                description:
                    "Small companies are not required to include cash flow statements in their financial reports, need hold only two board meetings a year as opposed to at least four for others, and do not have to rotate auditors every five years.",
                url: "https://economictimes.indiatimes.com/news/company/corporate-trends/ease-of-doing-business-small-company-limits-relaxed-further/articleshow/94256665.cms",
                urlToImage:
                    "https://img.etimg.com/thumb/msid-94256715,width-1070,height-580,imgsize-150273,overlay-economictimes/photo.jpg",
                publishedAt: "2022-09-16T23:09:00Z",
                content:
                    "The government has doubled the paid-up capital and turnover eligibility thresholds for small companies, which will help more businesses and startups get access to the lighter compliance regime for su… [+2708 chars]",
            },
        ],
    },
];


const aritcles_ = [

    {
        source: { id: "cnn", name: "CNN" },
        author: "Zoe Sottile, CNN",
        title: "A squirrel in a substation caused a power outage for over 10,000 Virginians - CNN",
        description:
        "A small creature caused a blackout in Virginia Beach last week: a wandering squirrel that made its way into the substation.",
        url: "https://www.cnn.com/2022/09/17/us/virginia-beach-squirrel-power-outage-trnd/index.html",
        urlToImage:
            "https://cdn.cnn.com/cnnnext/dam/assets/220915094934-01-va-beach-aerial-restricted-super-tease.jpg",
            publishedAt: "2022-09-17T14:15:00Z",
            content: null,
        },
        {
            source: { id: null, name: "MarketWatch" },
            author: "Charles Passy",
            title: "Meet the 30-year-old on the verge of selling his company to Adobe for $20B - MarketWatch",
            description:
            "Dylan Field, co-founder and CEO of Figma, could become one of the world’s youngest billionaires and newest tech titans if Adobe acquires his company as planned",
            url: "https://www.marketwatch.com/story/meet-the-30-year-old-on-the-verge-of-selling-his-software-company-to-adobe-for-20-billion-its-very-cool-he-tells-marketwatch-11663368495",
            urlToImage: "https://images.mktw.net/im-625496/horizontal",
            publishedAt: "2022-09-17T12:29:00Z",
            content:
            "Almost overnight, this 30-year-old has become the tech worlds newest titan and is poised to become one of the worlds youngest billionaires.Dylan Field, the co-founder and CEO of San Francisco-based F… [+5827 chars]",
    },
    {
        source: { id: null, name: "Fox Business" },
        author: "Julia Musto",
        title: "Georgia woman using KFC drive-thru finds $543 in cash under sandwich, decides what to do with it - Fox Business",
        description:
        "A Georgia grandmother is being honored by Jackson police after she found and returned more than $500 in cash. The money was accidentally left under her sandwich.",
        url: "https://www.foxbusiness.com/lifestyle/georgia-woman-kfc-drive-thru-finds-cash-under-sandwich",
        urlToImage:
        "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2022/09/0/0/Woman.jpg?ve=1&tl=1",
        publishedAt: "2022-09-17T11:00:33Z",
        content:
        "A Georgia woman is being commended by authorities after returning the more than $543 in cash she found under her sandwich. \r\nIn a Facebook post, the City of Jackson Police Department thanked Mrs. Joa… [+2051 chars]",
    },
    {
        source: { id: "cnn", name: "CNN" },
        author: "Nathaniel Meyersohn",
        title: "Why it's time to start paying with $2 bills - CNN",
        description:
        "Inflation has made it hard to pay for much with a buck these days. Wouldn't it make more sense to start paying with $2 bills instead?",
        url: "https://www.cnn.com/2022/09/17/business/2-dollar-bill-history/index.html",
        urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/220916015154-03-two-dollar-bills-money.jpg?q=w_800,c_fill",
        publishedAt: "2022-09-17T10:57:00Z",
        content:
        "Inflation has made it hard to buy much with a buck these days. \r\n$1 pizza has disappeared. Dollar stores arent dollar stores anymore. \r\nSo wouldnt it make more sense to start paying with $2 bills ins… [+5896 chars]",
    },
    {
        source: { id: "bloomberg", name: "Bloomberg" },
        author: null,
        title: "Goldman Cuts US Growth Forecast for 2023 After Rate Path Change - Bloomberg",
        description: null,
        url: "https://www.bloomberg.com/tosv2.html?vid=&uuid=3eec61f1-3698-11ed-9c40-594f6a507a71&url=L25ld3MvYXJ0aWNsZXMvMjAyMi0wOS0xNy9nb2xkbWFuLWN1dHMtdXMtZ3Jvd3RoLWZvcmVjYXN0LWZvci0yMDIzLWFmdGVyLXJhdGUtcGF0aC1jaGFuZ2U=",
        urlToImage: null,
        publishedAt: "2022-09-17T08:39:01Z",
        content: "To continue, please click the box below to let us know you're not a robot.",
    },
    {
        source: { id: null, name: "The Guardian" },
        author: "Ramon Antonio Vargas",
        title: "Chick-fil-A employee hailed for stopping man from carjacking mother with infant - The Guardian US",
        description:
        "Thomas ‘Mykel’ Gordon praised as ‘one incredible individual’ after fighting off assailant outside Florida restaurant",
        url: "https://amp.theguardian.com/us-news/2022/sep/17/chick-fil-a-employee-stops-carjacking",
        urlToImage: null,
        publishedAt: "2022-09-17T05:00:00Z",
        content:
        "FloridaThomas Mykel Gordon praised as one incredible individual after fighting off assailant outside Florida restaurant \r\nSat 17 Sep 2022 06.00 BST\r\nAn employee of a Chick-fil-A restaurant in Florida… [+4272 chars]",
    },
    {
        source: { id: "google-news", name: "Google News" },
        author: null,
        title: "Pilots at Alaska-owned Horizon Air win huge pay hikes in new contract - The Seattle Times",
        description: null,
        url: "https://news.google.com/__i/rss/rd/articles/CBMifWh0dHBzOi8vd3d3LnNlYXR0bGV0aW1lcy5jb20vYnVzaW5lc3MvYm9laW5nLWFlcm9zcGFjZS9waWxvdHMtYXQtYWxhc2thLW93bmVkLWhvcml6b24tYWlyLXdpbi1odWdlLXBheS1oaWtlcy1pbi1uZXctY29udHJhY3Qv0gEA?oc=5",
        urlToImage: null,
        publishedAt: "2022-09-17T01:41:09Z",
        content: null,
    },
    {
        source: { id: "reuters", name: "Reuters" },
        author: null,
        title: "Wall St Week Ahead: As markets churn, investors hide in cash despite surging inflation - Reuters",
        description:
        "A tough year in markets is leading some investors to seek refuge in cash, as they capitalize on higher interest rates and await chances to buy stocks and bonds at cheaper prices.",
        url: "https://www.reuters.com/markets/europe/wall-st-week-ahead-markets-churn-investors-hide-cash-despite-surging-inflation-2022-09-16/",
        urlToImage:
        "https://www.reuters.com/resizer/bsbFcqw7hCBD4EyNibEQVyqLBws=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/A6T754ZFAZMCVI3RRLSEQENR2A.jpg",
        publishedAt: "2022-09-17T01:33:00Z",
        content:
        "NEW YORK, Sept 16 (Reuters) - A tough year in markets is leading some investors to seek refuge in cash, as they capitalize on higher interest rates and await chances to buy stocks and bonds at cheape… [+4364 chars]",
    },
    {
        source: { id: null, name: "Barron's" },
        author: "Ben Levisohn",
        title: "Why Is the Stock Market Down? It Knows the Worst Is Yet to Come. - Barron's",
        description: "The S&P 500 fell 4.8% ahead of the Federal Reserve’s September meeting.",
        url: "https://www.barrons.com/articles/why-is-the-stock-market-down-it-knows-the-worst-is-yet-to-come-51663376619",
        urlToImage: "https://images.barrons.com/im-625296/social",
        publishedAt: "2022-09-17T01:03:00Z",
        content:
        "From a certain point onward, there is no turning back. The stock market reached that point this past week.Oh, the market was hopeful, entering the week, that inflation had reached its peak, that the … [+3245 chars]",
    },
    {
        source: { id: null, name: "YouTube" },
        author: null,
        title: "'Like Star Wars': World's first flying bike, made in Japan, debuts in the US - South China Morning Post",
        description:
        "Subscribe to our YouTube channel for free here: https://sc.mp/subscribe-youtubeThe world’s first flying bike made its US debut at the Detroit Auto Show on Se...",
        url: "https://www.youtube.com/watch?v=QX5Sm7ttt-k",
        urlToImage: "https://i.ytimg.com/vi/QX5Sm7ttt-k/hqdefault.jpg",
        publishedAt: "2022-09-17T01:00:21Z",
        content: null,
    },
    {
        source: { id: "the-washington-post", name: "The Washington Post" },
        author: "Hamza Shaban",
        title: "India's richest man surpasses Bezos on billionaires list - The Washington Post",
        description:
        "Meet Gautam Adani. His $152.2 billion fortune makes him richer than the Amazon founder but not as rich as Elon Musk.",
        url: "https://www.washingtonpost.com/business/2022/09/16/gautam-adani-forbes-billionaires/",
        urlToImage:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/N4V45LBVTUI63IGWIFJJTP7L2U.jpg&w=1440",
        publishedAt: "2022-09-17T00:44:39Z",
        content:
        "The jostling among the worlds richest humans intensified Friday as three men rotated through the No. 2 spot in the span of 24 hours, highlighting the volatility of the markets and meteoric rise of In… [+908 chars]",
    },
    {
        source: { id: null, name: "Fox Business" },
        author: "Aislinn Murphy",
        title: "Survey finds nearly 50% of NYC office staff go into the office on a typical weekday - Fox Business",
        description:
            "Nearly 50% of Manhattan's office workers now go into their offices on a typical weekday, a Partnership for New York City survey released Thursday found.",
            url: "https://www.foxbusiness.com/economy/poll-finds-50-percent-nyc-office-staff-go-office-typical-weekday",
            urlToImage:
            "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2019/09/0/0/iStock-Lower-Manhattan.jpg?ve=1&tl=1",
            publishedAt: "2022-09-17T00:31:53Z",
            content:
            "Nearly 50% of New York City's office workers now go into the office on a typical weekday, according to findings from a recent survey.\r\nThe Partnership for New York City said Thursday its survey found… [+2163 chars]",
        },
        {
            source: { id: null, name: "CNBC" },
            author: "Krystal Hur",
            title: "Cramer's lightning round: I don't want to own Nikola - CNBC",
            description:
            "\"Mad Money\" host Jim Cramer rings the lightning round bell, which means he's giving his answers to callers' stock questions at rapid speed.",
            url: "https://www.cnbc.com/2022/09/16/cramers-lightning-round-i-dont-want-to-own-nikola.html",
            urlToImage:
            "https://image.cnbcfm.com/api/v1/image/103507383-Lightning-Round.jpg?v=1663368940&w=1920&h=1080",
            publishedAt: "2022-09-16T22:55:40Z",
            content:
            'Albemarle Corp: "I suggest that you wait for it to come down a little, but I do like the situation very much."\r\nNikola Corp: "I think that stock is lethal, frankly. ... I don\'t want to own it."\r\nChen… [+206 chars]',
        },
        {
            source: { id: null, name: "Minneapolis Star Tribune" },
            author: "Jim Buchta, Jenny Berg",
            title: "Across Minnesota, higher mortgage rates take a toll on home sales and listings - Star Tribune",
            description:
            "It's still a seller's market, but it is becoming less competitive and the number of deals was down 24% last month.",
            url: "https://www.startribune.com/what-the-highest-mortgage-rates-in-14-years-are-doing-to-twin-cities-real-estate/600207510/",
            urlToImage: "https://chorus.stimg.co/24026867/IMG_0105.jpg?h=630&w=1200&fit=crop&bg=999&crop=faces",
            publishedAt: "2022-09-16T22:24:30Z",
            content:
            "The doubling of mortgage rates over the past year is beginning to take a toll on home sales across Minnesota.\r\nThis week, mortgage rates topped 6% for the first time in 14 years as lenders continue l… [+4387 chars]",
        },
        {
            source: { id: "reuters", name: "Reuters" },
            author: null,
            title: "Starboard builds stake in website development platform Wix - Reuters",
            description:
            'Starboard Value LP has built a 9% stake in website development platform Wix.com Ltd <a href="https://www.reuters.com/companies/WIX.O" target="_blank">(WIX.O)</a>, the activist hedge fund disclosed in a regulatory filing on Friday.',
            url: "https://www.reuters.com/markets/deals/exclusive-starboard-built-stake-website-development-platform-wix-sources-2022-09-16/",
            urlToImage:
            "https://www.reuters.com/resizer/wZzHKuySr5UfRV15X-7QVghEOf8=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/IEEU4QTF6ZJJ7GOR6EYUSWBUC4.jpg",
            publishedAt: "2022-09-16T22:15:00Z",
            content:
            "NEW YORK, Sept 16 (Reuters) - Starboard Value LP has built a 9% stake in website development platform Wix.com Ltd (WIX.O), the activist hedge fund disclosed in a regulatory filing on Friday.\r\nStarboa… [+2278 chars]",
        },
    {
        source: { id: null, name: "New York Post" },
        author: "Ryan Glasspiegel",
        title: "Barstool Sports CEO Erika Nardini steps down from WWE board of directors - New York Post ",
        description: "WWE announced the news in a filing with the SEC Friday afternoon.",
        url: "https://nypost.com/2022/09/16/barstool-sports-erika-nardini-steps-down-from-wwe-board/",
        urlToImage:
        "https://nypost.com/wp-content/uploads/sites/2/2022/09/erika-nardini-barstool-wwe-board.jpg?quality=75&strip=all&w=1024",
        publishedAt: "2022-09-16T21:14:00Z",
        content:
        "Barstool Sports CEO Erika Nardini has stepped down from WWE’s board. \r\nWWE announced the news in an 8K filing with the SEC Friday afternoon. The company said that the news was related to Penn Enterta… [+1006 chars]",
    },
    {
        source: { id: "the-wall-street-journal", name: "The Wall Street Journal" },
        author: "Joseph De Avila and Alyssa Lukpat",
        title: "Adderall Shortages Push ADHD Patients to Make Adjustments - The Wall Street Journal",
        description:
        "A labor shortage at a pharmaceutical company along with increased demand left Adderall on back-order at many pharmacies across the country.",
        url: "https://www.wsj.com/articles/adderall-shortages-push-adhd-patients-to-make-adjustments-11663362272",
        urlToImage: "https://images.wsj.net/im-624803/social",
        publishedAt: "2022-09-16T21:04:00Z",
        content:
        "Patients with attention-deficit hyperactivity disorder are having trouble filling prescriptions of Adderall and generic versions of the drug\r\n amid growing demand and a shortage of the medication, ac… [+415 chars]",
    },
    {
        source: { id: "the-wall-street-journal", name: "The Wall Street Journal" },
        author: "Joseph Walker",
        title: "Crispr Gene-Editing Drugs Show Promise in Preliminary Study - The Wall Street Journal",
        description:
        "Intellia Therapeutics said two of its experimental Crispr treatments produced positive results in early-stage trials.",
        url: "https://www.wsj.com/articles/crispr-gene-editing-drugs-show-promise-in-preliminary-study-11663327063",
        urlToImage: "https://images.wsj.net/im-624113/social",
        publishedAt: "2022-09-16T21:03:00Z",
        content:
        "Intellia Therapeutics Inc. reported encouraging early-stage study results for its Crispr gene-editing treatments, the latest sign that \r\nthe pathbreaking technology could result in commercially avail… [+266 chars]",
    },
    {
        source: { id: "cnn", name: "CNN" },
        author: "Sean Lyngaas, CNN",
        title: "Uber investigating 'cybersecurity incident' after hacker claims to access internal systems - CNN",
        description:
        'Uber said Thursday that it was investigating a "cybersecurity incident" after a hacker shared evidence that they had breached the ride-hailing giant\'s computer systems with journalists and security researchers.',
        url: "https://www.cnn.com/2022/09/15/tech/uber-cybersecurity-incident/index.html",
        urlToImage: "https://cdn.cnn.com/cnnnext/dam/assets/220915222040-02-uber-file-super-tease.jpg",
        publishedAt: "2022-09-16T20:54:00Z",
        content: null,
    },
    {
        source: { id: null, name: "Fox Business" },
        author: "Megan Henney",
        title: "Billionaire Ray Dalio warns stocks could plunge 20% if interest rates rise to 4.5% - Fox Business",
        description:
        "Ray Dalio, the founder of Bridgewater Associates, said in a post this week that interest rates will need to rise substantially in order to fight inflation.",
        url: "https://www.foxbusiness.com/business-leaders/billionaire-ray-dalio-warns-stocks-could-plunge-interest-rates-rise",
        urlToImage:
        "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2021/09/0/0/GettyImages-1140767704.jpg?ve=1&tl=1",
        publishedAt: "2022-09-16T20:49:27Z",
        content:
        "Billionaire Ray Dalio, the founder of one of the world's largest hedge funds, warned that stocks could tumble even lower this year after the hotter-than-expected August inflation data rattled markets… [+3504 chars]",
    }
]