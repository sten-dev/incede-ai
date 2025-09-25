import React, { Component } from "react";
import { Helmet } from "react-helmet";
import useSiteMetadata from "./SiteMetadata";
import { withPrefix,  } from "gatsby";
import { useLocation } from "@reach/router";
const MetaData = ({pageTitle, pageDescription, keyWords}) => {
  const { title, description } = useSiteMetadata();
  const location = useLocation();
  let pathName = `${location.pathname}`;
  
  return (
    <React.Fragment>
      <Helmet>
        <html lang="en" />
        <title>{pageTitle || title}</title>
        <meta name="description" content={pageDescription || description} />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href={`${withPrefix("/")}img/fav/apple-icon-57x57.png`}
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href={`${withPrefix("/")}img/fav/apple-icon-60x60.png`}
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href={`${withPrefix("/")}img/fav/apple-icon-72x72.png`}
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href={`${withPrefix("/")}img/fav/apple-icon-76x76.png`}
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href={`${withPrefix("/")}img/fav/apple-icon-114x114.png`}
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href={`${withPrefix("/")}img/fav/apple-icon-120x120.png`}
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href={`${withPrefix("/")}img/fav/apple-icon-144x144.png`}
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href={`${withPrefix("/")}img/fav/apple-icon-152x152.png`}
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/fav/apple-icon-180x180.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href={`${withPrefix("/")}img/fav/android-icon-192x192.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${withPrefix("/")}img/fav/favicon.ico`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href={`${withPrefix("/")}img/fav/favicon.ico`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${withPrefix("/")}img/fav/favicon.ico`}
        />
        <link rel="manifest" href={`${withPrefix("/")}img/fav/manifest.json`} />
        <meta
          name="msapplication-TileImage"
          content={`${withPrefix("/")}img/fav/ms-icon-144x144.png`}
        />

        <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
          color="#5c4abb"
        />
        <meta name="theme-color" content="#5c4abb" />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700&display=swap"
          rel="stylesheet"
        />
        {/* <link  href="https://fonts.googleapis.com/css?family=Noto+Sans:400,700&display=swap" rel="stylesheet"/> */}

        <meta property="og:title" content={pageTitle || title} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${pathName}`} />
        <meta
          property="og:image"
          content={`${withPrefix("/")}img/og-image.jpg`}
        />

        <meta property="og:image" content={`${withPrefix("/")}og-image.png`}/>
        <meta name="twitter:image" content={`${withPrefix("/")}twitter-image.png`}/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta property="og:site_name" content="Incede.ai"/>

        <link rel="canonical" href={`${pathName}`}/>
        <meta property="og:image:alt" content={pageTitle || title} />
        <meta property="og:description" content={pageDescription || description} />
        <meta name="keywords" content={keyWords || `IBM partner for watsonx, enterprise AI agents, generative AI, GenAI implementation, AI-powered business automation, planning budgeting analytics`} />
        <meta name="twitter:title" content={pageTitle || title} />
        <meta name="twitter:description" content={pageDescription || description} />
        <meta
          name="twitter:image"
          content={`${withPrefix("/")}img/og-image.jpg`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-161931343-1"
        ></script>
        <script>
          {(function(w, d, s, l, i) {
            if (w == null) return;
            w[l] = w[l] || [];
            w[l].push({
              "gtm.start": new Date().getTime(),
              event: "gtm.js",
            });
            var f = d.getElementsByTagName(s)[0],
              j = d.createElement(s),
              dl = l !== "dataLayer" ? "&l=" + l : "";
            j.async = true;
            j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
            f.parentNode.insertBefore(j, f);
          })(
            typeof window !== "undefined" ? window : null,
            typeof document !== "undefined" ? document : null,
            "script",
            "dataLayer",
            "GTM-KVWHF6H"
          )}
        </script>
        <script type="text/javascript">
          _linkedin_partner_id = "7125988"; window._linkedin_data_partner_ids =
          window._linkedin_data_partner_ids || [];
          window._linkedin_data_partner_ids.push(_linkedin_partner_id);
        </script>
        <script type="text/javascript">{`
                    (function(l) {
                        if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
                        window.lintrk.q=[]
                    }
                    var s = document.getElementsByTagName("script")[0];
                    var b = document.createElement("script");
                    b.type = "text/javascript";
                    b.async = true;
                    b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
                    s.parentNode.insertBefore(b, s);
                    })(window.lintrk);
                `}</script>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `     
                    <img height="1" width="1" style={{display:'none'}} alt="" src="https://px.ads.linkedin.com/collect/?pid=7125988&fmt=gif" />
               `,
          }}
        />
        {/* <noscript>
                    <React.Fragment>
                        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KVWHF6H"
                        height="0" width="0" style="display:none;visibility:hidden" ></iframe>
                    </React.Fragment>
                </noscript> */}
        <script src="https://dde-us-south.analytics.ibm.com/daas/CognosApi.js"></script>
        <script src="https://web-chat.global.assistant.watson.cloud.ibm.com/loadWatsonAssistantChat.js"></script>
        {/* <script>{`
            window.wxOConfiguration = {
              orchestrationID: "8a42557f82eb4562827378c97f834374_2a927bf8-609a-487a-8156-bcc430350d94",
              hostURL: "https://us-south.watson-orchestrate.cloud.ibm.com",
              rootElementID: "root",
              deploymentPlatform: "ibmcloud",
              crn: "crn:v1:bluemix:public:watsonx-orchestrate:us-south:a/8a42557f82eb4562827378c97f834374:2a927bf8-609a-487a-8156-bcc430350d94::",
              chatOptions: {
                  agentId: "3c32731f-fbec-4028-bfd9-63519ff10541", 
                  agentEnvironmentId: "c181a195-283c-41f3-a032-8c74108d927c",
              }
            };
            setTimeout(function () {
              const script = document.createElement('script');
              script.src = 'https://us-south.watson-orchestrate.cloud.ibm.com/wxochat/wxoLoader.js?embed=true';
              script.addEventListener('load', function () {
                  wxoLoader.init();
              });
              document.head.appendChild(script);
            }, 0);      
            `
          }
          </script> */}
          {/* DEV */}
          {/* <script>{`
            window.wxOConfiguration = {
              orchestrationID: "8a42557f82eb4562827378c97f834374_2a927bf8-609a-487a-8156-bcc430350d94",
              hostURL: "https://us-south.watson-orchestrate.cloud.ibm.com",
              rootElementID: "root",
              deploymentPlatform: "ibmcloud",
              crn: "crn:v1:bluemix:public:watsonx-orchestrate:us-south:a/8a42557f82eb4562827378c97f834374:2a927bf8-609a-487a-8156-bcc430350d94::",
              chatOptions: {
                  agentId: "3c32731f-fbec-4028-bfd9-63519ff10541", 
                  agentEnvironmentId: "c181a195-283c-41f3-a032-8c74108d927c",
              },
              style: {
                headerColor: '#5C4ABB',
                primaryColor: '#5C4ABB'
              },
            };
            setTimeout(function () {
              const script = document.createElement('script');
              script.src = 'https://us-south.watson-orchestrate.cloud.ibm.com/wxochat/wxoLoader.js?embed=true';
              script.addEventListener('load', function () {
                  wxoLoader.init();
              });
              document.head.appendChild(script);
            }, 0);                     
           `}
          </script>   */}

          {/* PROD */}
            <script>{`
                  window.wxOConfiguration = {
                    orchestrationID: "ad4fa6953138448689fb746aade5025e_ad8cbbfc-f515-42a2-9c60-e21db18362a7",
                    hostURL: "https://us-south.watson-orchestrate.cloud.ibm.com",
                    rootElementID: "root",
                    deploymentPlatform: "ibmcloud",
                    crn: "crn:v1:bluemix:public:watsonx-orchestrate:us-south:a/ad4fa6953138448689fb746aade5025e:ad8cbbfc-f515-42a2-9c60-e21db18362a7::",
                    chatOptions: {
                        agentId: "f66de13e-9ca8-4333-a290-c32c56e5f804", 
                        agentEnvironmentId: "51fa36ba-a5f6-4f92-97dd-ef7015558a7f",
                    },
                    style: {
                      headerColor: '#5C4ABB',
                      primaryColor: '#5C4ABB'
                    },
                  };
                  setTimeout(function () {
                    const script = document.createElement('script');
                    script.src = 'https://us-south.watson-orchestrate.cloud.ibm.com/wxochat/wxoLoader.js?embed=true';
                    script.addEventListener('load', function () {
                        wxoLoader.init();
                    });
                    document.head.appendChild(script);
                  }, 0);
              `}                     
            </script>  

        {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
      </Helmet>
    </React.Fragment>
  );
};
export default MetaData;
