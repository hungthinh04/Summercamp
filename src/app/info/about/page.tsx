import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About us | Camp Adventure",
  description: "What began as a study project has now become a top address for international sports, language and adventure camps for children and teenagers in Europe.",
};

export default function AboutPage() {
  return (
    <div className="uk-section-default uk-section">
      <div className="uk-container uk-container-large">
        <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
          <div className="uk-width-1-1@m">
            <h1 className="uk-h2 uk-text-center">About us</h1>
            <div className="uk-divider-icon uk-width-medium uk-margin-auto"></div>
            
            <div className="uk-panel uk-dropcap uk-column-1-2@m uk-column-1-1@s uk-margin">
              <p>
                It all began with a project by Jan Vieth during his studies in 2002. His aim was to take 
                the distinguishing features of camps he had experienced in Canada, Australia and the USA 
                and introduce those features to camps in Germany. The main focus is not only varied programs 
                and great locations but also the special cohesion that&apos;s built up and promoted in a 
                truly international camp community.
              </p>
              
              <p>
                Regardless of which country or culture a child, teen or Teamer (staff member) comes from – 
                they should all feel comfortable together and experience a unique and unforgettable time at camp. 
                Even though camp participants might live thousands of kilometers apart, new friendships are 
                forged in camp which often last long after the camp session has ended. New participants are 
                welcomed by returning campers because that&apos;s what they like about our camps: meeting new 
                people, making new friends and refreshing old friendships. Parents often tell us that after camps, 
                their kids have kept up friendships and visited each other, even travelling to places like France, 
                Spain or as far as Canada. Parents also tell us that kids develop an increased motivation to study 
                English in school so that they can communicate better at the next camp.
              </p>
              
              <p>
                Another one of our basic principles is that sports in camp aren&apos;t about winning and losing. 
                Instead, it&apos;s about having fun together, gaining self-confidence and learning to become more 
                independent. Naturally, conflicts can arise. But we always find a way to solve them together.
              </p>
              
              <p>
                We are not a huge company – we prefer to remain a big family. Our founder, Jan Vieth, knows every 
                Teamer personally and always leads training along side the coaching team. Every year we have 
                approximately 400 Teamers from about 30 different nations supporting us in our camps for at least 
                4 weeks. Our international office team consists of 12 staff members and operates in Canada, Spain 
                and Germany. Every year we have participants from up to 40 (!!!) different nations and about 70 % 
                &quot;returning campers&quot;.
              </p>
              
              <p>
                We want to treat every child like an individual, which is why we do not offer enormous camps 
                involving a thousand kids. We are also not a &quot;drunk beach-party&quot; youth tour operator. Any form 
                of violence or any use of drugs, alcohol or cigarettes is not permitted for any participant 
                regardless of age.
              </p>
              
              <p>
                We know that it is an incredible leap of faith when a parent entrusts us with their child. We also 
                know many questions can arise. Please feel free to contact us and we will do our best to answer 
                any questions or concerns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
