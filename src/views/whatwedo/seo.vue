<template>
    <div class="_page">
        <section class="featured_image">
        </section>

        <section class="sectionfiller">
            <div class="container boxIt">
                <h1 class="title">Drive more traffic to your website smart seo</h1>
                <p class="content">
                    Your website’s looking great, your content reads beautifully, your site architecture leads visitors down a clear buying journey, you’ve even implemented some enticing interactive features to engage your customers. So why aren’t you being bombarded with traffic? Essentially, you’ve just built the best party ever, but you’ve forgotten to invite any guests.
                    <br><br>
                    SEO (Search Engine Optimisation) is the tool that lets everybody know that the party’s at your place. If your website doesn’t show up on Google, Yahoo or Bing results pages, how will anybody know you exist? At our London digital marketing agency we use a smart blend of traditional SEO and forward-thinking techniques to ensure your website ranks for important search terms that are relevant for your specific business.
                    <!-- <br><br> -->
                </p>
                <h2 class="title">SEO KEYWORD RESEARCH</h2>
                <p class="content">
                    Keywords can’t simply be plucked out of the air. They should be the keystone of your SEO campaign. After big, quality-driven updates to the way search engines rank websites, it’s more important than ever to be as relevant and useful as possible. That means your keywords must be chosen wisely.
                    <br><br>
                    It’s a delicate science and should factor in: how many people are searching, how much competition you face, how relevant keywords are to your offering and the frame of mind a visitor may be in when they type those all important words into a search box.
                    <br><br>
                    Whew! It’s a lot to consider, but get this initial stage right and you’ve built a firm foundation for your entire SEO campaign. At M-Sugroo we know that smart keyword research is the cornerstone of good SEO, which is why we conduct thorough, insightful keyword research to get everything started the right way.
                    <br><br>
                    We can advise on all aspects of your SEO strategy, using intelligent keyword research as the essential starting point. With a clear and carefully planned roadmap, we can provide an SEO strategy that drives your website to where it needs to be to succeed online.
                </p>

                <h2 class="title">COMPETITOR ANALYSIS</h2>
                <p class="content">
                    Next it’s time to look at what your competitors are doing. We’re not talking about eyeholes in a newspapers and mirrored shades, we mean using SEO tools to dig into things like their backlink profiles, conducting content audits to see what they’re doing well and using all this information to make your digital marketing even smarter.
                    <br><br>
                    It’s easy to see who’s succeeding in the offline world, but on the web you could be outperformed by the competitor you least suspect. It can take some research to identify your key online competitors as it isn’t always the flashiest websites doing the most bustling trade. M-Sugroo can help you keep an eye on the biggest competition in your online marketplace and provide consultation to help you catch up – then beat them.
                    <br><br>
                    We understand businesses and take the time to learn about yours from the inside out. This puts our smart digital team in the perfect position to build you a sure-fire SEO strategy.
                </p>

                <h2 class="title">ON SITE SEO</h2>
                <p class="content">
                    Our developers and designers build websites with SEO in mind. We take care of everything search engines look for, from accessibility and loading times to site architecture and your blog structure, providing you with a strong base for a powerful SEO campaign.
                    <br><br>
                    A well optimised website is a wonderful thing, but it’s easy to overdo it. Google’s algorithms are now wise to over-optimisation and can penalise websites who use ‘keyword stuffing’. When optimising a website, you need your text to read seamlessly, whilst integrating the correct keywords where they work. Choosing the right keywords for the right pages during the keyword research stage is half the battle, but sensitive optimisation is crucial too. At M-Sugroo we take the same approach to optimising meta data; softly softly catchy monkey.
                </p>

                <h2 class="title">LINKS & LIKES</h2>
                <p class="content">
                    Performing offsite SEO is essential. We use a variety of techniques to build strong, high quality links to your website and to create helpful resources which could turn interested visitors into leads. From writing top notch guest posts which earn you exposure on important industry blogs along with valuable links, to building strong, standalone web 2.0s that can spark off a buying journey which results in a conversion on your site – we’ve got lots of offsite SEO tricks up our sleeves. We can even blend your SEO strategy with online presence boosting social media services to get your target market talking
                </p>

                <h2 class="title">SEO STRATEGY</h2>
                <p class="content">
                    If intelligent keyword research is the foundation of good SEO, a strong SEO strategy is the glue. You’ll need a clear plan, full of diverse techniques and high quality practices which all work together to really impress the search engines and bring you that all-important, relevant traffic.
                    <br><br>
                    At M-Sugroo we can help businesses to mastermind and implement new digital marketing strategies, making use of tried and tested methods alongside future-proof tactics. We keep up with Google, so you can keep up in the rankings.
                    <br><br>
                    Ready to develop and grow your SEO campaign with the help of our digital marketing agency in London? Select one of the starter plans below


                </p>

            </div>
        </section>

        <section class="sectionfiller">
                <div class="container ">
                    <h4 class="center-text cap">
                        Quick Start Packages
                        <div class="btm"></div>
                    </h4>
                    <div class="row">
                        <div class="col price_cards" v-for="p in packages">
                            <h1 class="symbol" v-html="p.symbol"></i></h1>
                            <h2 class="p_name">{{p.name}}</h2>
                            <strong>{{p.sub}}</strong>
                            <p>
                                <!-- <strong>Description</strong> <br> -->
                                {{p.comment}}
                            </p>

                            <ul>
                                <li v-for="item in p.included">
                                    <div class="row">
                                    <div class="col-md-1"><i class="fas fa-check"></i> </div>
                                    <div class="col">{{item.name}}</div>
                                    </div>
                                </li>

                                <button class="btn-plan-selector"> Select Package</button>
                            </ul>
                        </div>
                    </div>
                </div>
        </section>

        <section class="sectionfiller">
            <div class="container ">
            </div>
        </section>
    </div>
</template>
<script>
export default {
    name: 'Price',
    data() {
        return {
            packages: [
                {
                    name: 'Basic',
                    sub: 'Great for low competition keywords',
                    symbol: '<i class="fas fa-charging-station"></i>',
                    included: [
                        {
                            name: '1000 High Authority Backlinks'
                        },
                        {
                            name: 'from 100 Platforms'
                        },
                        {
                            name: 'High Authority Backlinks from POWERFUL DOMAINS'
                        },
                        {
                            name: 'All self hosted, Real sites'
                        },
                        {
                            name: '100% Manual service'
                        },
                        {
                            name: 'Made according to Latest Google Updates'
                        },
                        {
                            name: 'Natural mix of DoFollow & NoFollow Links'
                        },
                        {
                            name: 'All Languages Acceptability'
                        },
                        {
                            name: 'Detailed Report of backlinks on Order Completion'
                        }
                    ]
                },{
                    name: 'Standard',
                    sub: 'Great for medium competition keywords',
                    symbol: '<i class="fas fa-skating"></i>',
                    comment: '',
                    included: [
                        {
                            name: '3000 High Authority Backlinks'
                        },
                        {
                            name: 'from 115000 Platforms'
                        },
                        {
                            name: 'High Authority Backlinks from POWERFUL DOMAINS'
                        },
                        {
                            name: 'All self hosted, Real sites'
                        },
                        {
                            name: '100% Manual service'
                        },
                        {
                            name: 'Made according to Latest Google Updates'
                        },
                        {
                            name: 'Natural mix of DoFollow & NoFollow Links'
                        },
                        {
                            name: 'All Languages Acceptability'
                        },
                        {
                            name: 'Detailed Report of backlinks on Order Completion'
                        }
                    ]
                },{
                    name: 'Premium',
                    sub: 'Great for high competition keywords',
                    symbol: '<i class="fas fa-gem"></i>',
                    comment: '',
                    included: [
                        {
                            name: '5000 High Authority Backlinks'
                        },
                        {
                            name: 'from 200 Platforms'
                        },
                        {
                            name: 'High Authority Backlinks from POWERFUL DOMAINS'
                        },
                        {
                            name: 'All self hosted, Real sites'
                        },
                        {
                            name: '100% Manual service'
                        },
                        {
                            name: 'Made according to Latest Google Updates'
                        },
                        {
                            name: 'Natural mix of DoFollow & NoFollow Links'
                        },
                        {
                            name: 'All Languages Acceptable'
                        },
                        {
                            name: 'Detailed Report of backlinks on Order Completion'
                        }
                    ]

                }

            ]
        }
    },
    created() {
        setTimeout(function () {
            let url = window.location.pathname;
            if(url.includes('seo')){
                let action = document.querySelector('.callToAction');
                action.style.display = "none";
                console.log(action)
            } else {
                let action = document.querySelector('.callToAction');
                action.style.display = "block";
            }
        })
        
    }
}
</script>
<style lang="scss">
.center-text {
    text-align: center;
}

.cap {
    text-transform: uppercase;
}

.price_cards {
    background: white;
    /* border: 1px solid red; */
    padding: 20px;
    margin: 5px;
    box-shadow: 0px 0px 15px -1px rgba(0,0,0,0.11);
    border-radius: 3px;
    padding-top: 40px;

    ul {
        padding: 0px;

        li {
            padding: 8px;
            list-style: none;
            font-weight: 300;
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }
    }

    .btn-plan-selector {
        background: white;
        color: black;
        padding: 12px;
        font-size: 1.2rem;
        width: 100%;
        border: none;
        margin: 0 auto;
        margin-top: 30px;
    }

    .p_name {
        font-weight: 600;
        font-size: 1.2rem;
        text-transform: uppercase;
        padding: 0;
        margin: 0;
        margin-top: 30px;
    }    

    .btm {
        width: 200px;
        height: 3px;
        margin-left: 6px;
        background: #4544bd94;
        margin-top: 10px;
    }

    .symbol {
        display: inline;
        margin: 3px;
        padding: 12px;
        border-radius: 3px;
        margin-bottom: 8px;
        font-size: 1.9rem;
    }

    &:first-child {
        .symbol {
            background: #4545bd ;
            color: white;
        }

        .btn-plan-selector {
            background: #4545bd;
            color: white;
            padding: 12px;
            font-size: 1.2rem;
            width: 100%;
            border: none;
            margin: 0 auto;
            margin-top: 30px;
        }
    }

    &:nth-child(2) {
        background: #4545bd;
        color: white;

        li {
            border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        }
    }

    &:last-child {
        background: #1d1d32;
        color: white;

        li {
            border-bottom: 1px solid rgba(0, 0, 0, 0.7);
        }
    }
}


</style>