import React, { Component } from "react";

//Style Imports
import "../../styles/blog.css";

//Importing Helper
import { BlogList } from "../../helpers/BlogList";

//Component Imports
import Titles from "../../components/Titles";
import BlogReferences from "../../components/BlogReferences";
import BlogButtons from "../../components/buttons/BlogButtons";
import FreeArticlesLeftUI from "../../components/login/FreeArticlesLeftUI";
import FreeBlogLimitReachedModal from "../../components/login/FreeBlogLimitReachedModal";
import Notifications from "../../components/Notifications";
import ConfirmShamingModal from "../../components/ConfirmShamingModal";

//Import External Packages
import FadeIn from "react-fade-in"; //Used for smooth page transition load - Documentation can be found here => https://www.npmjs.com/package/react-fade-in
import Helmet from "react-helmet"; //External Package used to dynamically update the meta tags of the site - Documentation can be found here => https://www.npmjs.com/package/react-helmet

//Context Import
import GlobalContext from "../../context/GlobalContext";

export default class Blog3 extends Component {
  //Lifecycle method that scrolls the page to the top on load
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { showNetArt } = this.context;

    const blogInfoToLoad =
      BlogList.length -
      parseInt(
        window.location.pathname.charAt(window.location.pathname.length - 2)
      );

    return (
      <>
        {/* React Helmet is used to dynamically adjust the head of the document and add meta data */}
        <Helmet>
          <title>{BlogList[blogInfoToLoad].cardTitle}</title>

          <meta
            name="title"
            property="og:title"
            content={BlogList[blogInfoToLoad].cardTitle}
          />
          <meta property="og:type" content="article" />
          <meta
            name="author"
            property="article:publisher"
            content="Michael Parkin"
          />
          <meta property="article:section" content="Theory" />
          <meta property="article:tag" content="Theory" />
          <meta
            property="og:url"
            content={`https://mikeparkinwits.github.io/wsoa4175a_1894979/Blogs/Blog${blogInfoToLoad}.html`}
          />
          <meta
            property="og:image"
            content={`https://mikeparkinwits.github.io/wsoa4175a_1894979/assets/PreviewImages/Blog${blogInfoToLoad}.svg`}
          />
          <meta
            property="og:image:alt"
            content={BlogList[blogInfoToLoad].imageAltText}
          />
          <meta
            name="description"
            property="og:description"
            content={BlogList[blogInfoToLoad].cardSummary}
          />

          {/*Google Structured Data can only be added inline as it is using JSON-LD - as noted in the w3 here: https://www.w3.org/TR/2016/REC-html51-20161101/semantics-scripting.html#the-script-element */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              name: BlogList[blogInfoToLoad].cardTitle,
              author: {
                "@type": "Person",
                name: "Michael Parkin",
              },
              url: `https://mikeparkinwits.github.io/wsoa4175a_1894979/Blogs/Blog${blogInfoToLoad}.html`,
              headline: BlogList[blogInfoToLoad].cardTitle,
              image: [
                `https://mikeparkinwits.github.io/wsoa4175a_1894979/assets/PreviewImages/Blog${blogInfoToLoad}.svg`,
              ],
              datePublished: BlogList[blogInfoToLoad].cardDate,
            })}
          </script>
        </Helmet>

        <FadeIn transitionDuration={1000}>
          <article className="page-container h-entry">
            <article>
              {
                //Checking if Net Ark Mode is enabled, and if true displaying the Articles Left
                showNetArt && <FreeArticlesLeftUI />
              }

              <Titles
                mainTitle={true}
                title={BlogList[blogInfoToLoad].cardTitle}
                subTitle={true}
                blogDate={BlogList[blogInfoToLoad].cardDate}
                blogWords={BlogList[blogInfoToLoad].blogWords}
              />
              <section className="blog-contents e-content">
                <p>
                  While the internet has long been cited as an invaluable
                  resource in making the world a more inclusive place, allowing
                  for easier access to both people, and information, across the
                  world; for many, it has actually furthered the divide between
                  them and others. As such, in this blog post I aim to evaluate
                  the digital divide in today’s world. To do this, I start by
                  looking at what the digital divide is and the effect it has
                  had since the start of the global pandemic; before concluding
                  by looking at the potential ways in which we can shrink it.
                </p>
                <p>
                  To start, we must first have a full understanding of what the
                  digital divide is and how it came to be. As Nanjira Sambuli
                  notes in her 2019 interview with the World Economic Forum,
                  there is still a{" "}
                  <q>
                    build it and they will come mentality driving planning,
                    innovation and investments in the technology sector.
                  </q>{" "}
                  (Sambuli, 2019: para. 2) So, with the internet, it is assumed
                  that through both its creation, and the creation of devices
                  used to connect to it, people will automatically be able to
                  use it – but that is not the case. Preceding the creation of
                  the internet, and its technologies, is a long history of
                  gender, racial, and financial inequality which cannot be
                  ignored; effecting who can meaningfully access, and benefit
                  from, these technologies. Thus, from this we then see that the
                  digital divide is the gap between those who have access to,
                  and means to use, digital technologies, and those who do not –
                  exacerbated by the divide already present in the world.
                </p>
                <p>
                  However, where can we see it taking place most prominently
                  today? While the digital divide has existed since technologies
                  inception, with the emergence of the covid-19 pandemic the
                  effects of this divide have been compounded – making it an
                  ideal place to start understanding its effects. As the world
                  rushed to face the spread of the coronavirus, governments
                  mandated that people stay at home where possible – using
                  technology and the internet as a way to work, learn, and
                  communicate. But through this, the assumption was made that
                  access to, and the know-how to use, technology and the
                  internet was a basic resource; and by doing so, those already
                  effected by the digital divide were even further excluded.
                  While governments, and other institutions, tried to combat
                  this by providing access to technology and the internet, most
                  of these attempts are short term and not enough to offset the
                  accelerated digital transition caused by the covid-19
                  pandemic.
                </p>
                <p>
                  For instance, in their 2020 article{" "}
                  <cite>Digital Divide Widens</cite>, Maria Tataki and Dimities
                  Glynos note that one of the areas with the largest digital
                  divides, exacerbated by coronavirus, is education (Tataki and
                  Glynos, 2020: para. 1 - 4) – especially between first, and
                  third, world countries. In first-world countries, the majority
                  of students were able to easily transition to e-learning
                  methods because of their access to technology – allowing
                  learning continuity between in-person, and digital, lessons.
                  In contrast, the same cannot be said for third world
                  countries, as majority of the students did not already have
                  access to, or the know-how to use, technology – resulting in
                  many students dropping out. Not only that, but even when
                  digital technologies were accessible, the quality and
                  continuity of learning was not the same. While first-world
                  countries had online classes that closely resembled that of
                  their in-person counterpart, with students on camera and
                  appropriate teaching tools; because of data restrictions and
                  limited computer literacy, online classes in the third-world
                  mainly involved very simple tools and talking to names on a
                  screen – which is not conducive to learning, and in turn
                  furthers the divide between the first, and third, worlds.
                </p>
                <p>
                  But what can be done to shrink this divide? Although the
                  obvious answers are that internet access has to become more
                  affordable, and computer literacy has to be taught at an
                  earlier age; these are not solutions. In contrast, Kim
                  Harrisberg, in her 2021 article{" "}
                  <cite>
                    Bridging Africa's digital divide: The rise of community
                    internet
                  </cite>{" "}
                  (2021), provides us insight into a practical solution that is
                  already proven to be effective. She notes that instead of
                  relying on big companies to bring internet connections and
                  computer literacy to remote communities, community members are
                  taking it upon themselves to create smaller, decentralized,
                  networks which can, in turn, be used to connect and educate
                  the entire community (Harrisberg, 2021: para. 5 - 10). This is
                  an extremely simple, and cost-effective, method to bring more
                  affordable access to areas in which bigger network companies
                  see little monetary gain. Although, this is merely a single
                  solution and should be done in combination with things such as
                  better policies, cheaper data prices, and bigger global
                  internet initiatives - all of which, I believe, should be a
                  top priority for both governments, and external agencies,
                  around the world.
                </p>
                <p>
                  So, in conclusion, by first explaining what the digital divide
                  is, and how it came about, I was able to explore the effects
                  of it in today’s social distancing world – referring
                  specifically to the differences in e-learning between the
                  first, and third, world. Lastly, I then explored just one of
                  the many ways in which smaller communities are combatting the
                  digital divide through the use of smaller, decentralized,
                  networks.
                </p>
              </section>
            </article>
            <BlogReferences
              references={[
                {
                  referenceStart:
                    "Harrisberg, K. (2021). Africa makes an effort to slowly bridge the digital divide. ",
                  referenceCite: <cite>World Economic Forum. </cite>,
                  referenceEnd:
                    "Available at: https://www.weforum.org/agenda/2021/12/bridging-africas-digital-divide-the-rise-of-community-internet/",
                },
                {
                  referenceStart:
                    "Sambuli, N. (2019). What is digital equality? An interview with Nanjira Sambuli. ",
                  referenceCite: <cite>World Economic Forum. </cite>,
                  referenceEnd:
                    "Available at: https://www.weforum.org/agenda/2019/04/digital-equality-interview-nanjira-sambuli/",
                },
                {
                  referenceStart:
                    "Tataki, M. and Glynos, D. (2020). Digital Divide Widens. ",
                  referenceCite: (
                    <cite>Institute for Internet & the Just Society. </cite>
                  ),
                  referenceEnd:
                    "Available at: https://www.internetjustsociety.org/digital-divide-widens",
                },
              ]}
            />
            <BlogButtons type="Blog" />
          </article>
        </FadeIn>

        {
          // Outside the FadeIn Function to make smoother loading of modal
          // Checks if Net Ark Mode is enabled, and if true displays relevant Net Art Components

          showNetArt && (
            <>
              {" "}
              <FreeBlogLimitReachedModal />
              <Notifications />
              <ConfirmShamingModal />
            </>
          )
        }
      </>
    );
  }
}

Blog3.contextType = GlobalContext;
