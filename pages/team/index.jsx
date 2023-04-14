import {useState} from "react";
import PageHeroBanner from "@/component/PageHeroBanner";
import {IoIosArrowDropdown, IoIosArrowDropup} from "react-icons/io"

const index = () => {
  return (
    <div>
      <PageHeroBanner
        pageTitle="Team >"
        heading="Our pastors are loving and sincere people"
        image={"/rev-ikenna-emmanuel-prayer.jpg"}
      />
      <div className="space h-16 sm:h-24 ">{' '}</div>

      <div className="grid gap-16">
        <TeamProfile profile={`Rev. Barr. Ikenna Emmanuel`} profileList={teamProfileList} noSub2={false} profileImg={`/ikenna-emmanuel.jpeg`}/>
        <TeamProfile profile={`Barr. Nkiru Ikenna-Emmanuel`} profileList={barrNkiru} noSub2={true} profileImg={`/nkiru-ikenna-emmanuel.webp`}/>
      </div>
      
    </div>
  )
};

export default index;

export const TeamProfile = ({profile, profileList, profileImg, noSub2}) => {
  const {profileSummary, pesronalProfile, academicQualification, 
    personalPhilosophy, leadershipExperience,  christianBackground, 
    passionForNationBuilding} = profileList()

  const sectionDetails = [
    {
      heading: 'Personal Profile', 
      sub: '',
      list: pesronalProfile,
      paragraph: '',
      sub2: ``,
      noSub2: noSub2
    },
    {
      heading: 'Academic Qualification', 
      sub: '',
      list: academicQualification,
      sub2: ``,
      paragraph: '',
      noSub2: noSub2
    },
    {
      heading: `Personal Philosophy`,
      sub: ``,
      list: personalPhilosophy,
      paragraph: '',
      sub2: ``,
      noSub2: noSub2
    },
    {
      heading: `Leadership Experience`,
      sub: `Rev Barr Ikenna Emmanuel is also the TEAM LEADER of FAITHHOUSE LEADERSHIP WORLD, 
              a multi ethnic, multicultural, transnational organization 
              He has served for over many years in the following registered corporate entities:`,
      list: leadershipExperience,
      paragraph: '',
      sub2: ``,
      noSub2: noSub2
    },
    {
      heading: `christian background`,
      sub: ``,
      list: ``,
      paragraph: christianBackground,
      sub2: null,
      noSub2: noSub2

    },
    {
      heading: `His passion for nation building`,
      sub: ``,
      list: ``,
      paragraph: passionForNationBuilding,
      sub2: `Rev Ikenna Emmanuel's speech during the 2019 Imo state gubernatrorial elections`,
      noSub2: noSub2
    },

    ]
  
  return (
      <div id={profile} className="section-padding grid gap-6">
        {/* heading */}
        <div className="flex sm:items-end gap-3 sm:gap-6 flex-col sm:flex-row border-b 
          pb-4 border-zinc-300 justify-start">

            <div className="img">
              <div className="w-full sm:w-80 h-60 overflow-hidden">
                <img src={profileImg} alt={profile} 
                className="w-full h-full object-cover"/>
              </div>
            </div>

            <div className="title">
              <h2 className="name font-bold text-2xl pb-2">
               {profile}
              </h2>
              <p>
                {profileSummary}
              </p>
            </div>
        </div>
        
          <div className="grid gap-4">
          {
            sectionDetails?.map(({heading, sub, sub2, paragraph, list, noSub2}) => {
              return (
                <div key={heading} className="">
                  <SectionHeader
                    heading={heading}
                    sub={sub}
                    list={list}
                    paragraph={paragraph}
                    sub2={sub2}
                    noSub2={noSub2}
                  />
                </div>
                
              )
            })
          }
          </div>
     </div>      
    )
  }

export const SectionHeader = ({heading, sub, list, paragraph, sub2, noSub2}) => {
  const [active, setActive] = useState(false)
  return (
    <div className="grid gap-2 ">
      <div className="flex justify-between p-4 bg-zinc-200 onHover" onClick={() => setActive(!active)}>
        <h3 className="capitalize text-lg font-bold ">
          {heading}
        </h3>
        <div className="text-2xl hover:scale-110 duration-300">
          {active ? <IoIosArrowDropup/> : <IoIosArrowDropdown/>}
        </div>
      </div>
  {
    active && <Content list={list} sub={sub} paragraph={paragraph} sub2={sub2} noSub2={noSub2}/> 
  }
  </div>
  ) 
}

export const Content = ({list, sub, paragraph, sub2, noSub2 }) => {
  return (
    <div>
       { !noSub2 && sub ? <p>{sub}</p> : null}
    { list?.length ? <div className="grid gap-2">
      {list.map((item, i) => {
        return (
          <div className="flex gap-2  " key={i}>
            <div className="pt-2"><div className="space w-2 h-2 p-1 bg-black">{''}</div></div>
            <p>{item}</p>
          </div>
        )
      }) 
      }
    </div> : 
    (
      <div className="grid gap-4">
        <p className="font-bold ">
          {!noSub2 && sub2}
        </p>
           {paragraph?.map((item, i) => {
            return (
              <div key={i} className="grid gap-2">
                <p>{item}</p>
              </div>
            )
           })} 
      </div>
    ) 
  }
  </div>
  )
}

export const teamProfileList = () => {
  const profileSummary = ` Rev Barr Ikenna Emmanuel is a human right activist and int'l team leader of Faithhouse. 
  He advocates that the development of any institution and more 
  also a state and nation is drawn from their Strong value for human life, human capital development and 
  robust enforcement of law and order.`

  const pesronalProfile = [
                 ` REV. BARR. IKENNA EMMANUEL is a Barrister and solicitor of the supreme court of Nigeria and a HUMAN RIGHT ACTIVIST. ` ,                 
                 `He is the President/ Team lecturer at the Skill-Edge Leadership Consult Abuja (a leadership consult, Economic and Nation
                     Building school).` ,
                  `He is a UN/IAWPA Peace Ambassador.`,
                  `He has stormy passion for financial/business development, socio-economic development, good Governance, and International 
                  Law and Diplomacy.`,
                 ` He is a public speaker, author, educator, leadership mentor, government and business consultant.`,
                  `He addresses over 100,000 people yearly on personal, corporate and professional development (off and online) appealing 
                    to and transcending age, race, creed and economic background.`,
                  `He is the Team leader/senior pastor of FAITHHOUSE LEADERSHIP CENTRE, a cross-cultural, non-tribalistic, socio-political, 
                  transformational and spiritual institute.`,
                     `Rev Barr Ikenna Emmanuel is a prolific author of books and is known for his powerful life-changing Bestselling Books
                      distributed around the world. Many have testified of the impact of his writings and the practical nature of his works.
                     A Media Personality for over 5years and his Radio programs also cover over 30 million people around Nigeria from which
                      he receive thousands of responses weekly.`,
                ` Married for 13 years’ to barr nkiru ikenna Emanuel with four children`,
                ]
  const academicQualification = [
              `International Relations and Diplomacy (M.Sc) at Imo State University Owerri. ` ,
              ` Peace and Conflict Studies from NOUN University Abuja,`,
              `science Laboratory Technology (Microbiology and virology) at the Federal university of technology Owerri. `,
              `Christian Education/Theology at  WAST.`,
              ` Diploma graduate with distinction AT THE WOFBI LEADERSHIP BIBLE SCHOOL KADUNA, `,
            ]
  const personalPhilosophy = [
    `A Detour from endless ROAD CONSTRUCTION to HUMAN RECONSTRUCTION,`,
    `A Detour from PROMISES to ON TIME FULFILLMENT,`,
      `A Detour from Democratic dictatorship to Democracy,`,
      `A Detour from mere CHARISMA to CHARACTER,`,
     `A detour from family system/zoning-centered Governance to Public service interest.`,
    ]
  const leadershipExperience = [

    `Trustee board member THE FAITHHOUSE ORGANIZATION FOR LEADERSHIP AND COMMUNITY DEVELOPMENT (FOLCODE)-N.G.O`,
     ` ASSISTANT TRUSTEE BOARD FAITHHOUSE TRANSFORMATION ASSEMBLY (CHURCH)`,
    `TEAM CONSULTANT FAITHHOUSE LEADERSHIP ACADEMY (SECONDARY SCHOOL)`,
    ` PRESIDENT FAITHHOUSE LEADERSHIP INSTITUTE (FALI)`,
     `LECTURER  CORPORATE SKILLS-EDGE TRAINING INSTITUTE`,
    ` TRAINER/ ADVISER KINGDOM BILLIONAIRES CLUB (KBC)`,
    ` TEAM MEMBER, LIFE CARE CLUB INTERNATIONAL  (LCC)`,
    ` TEAM MEMBER FAITHHOUSE LEADERSHIP CAMPUS FELLOWSHIP (IN FOUR CAMPUS IN IMO STATE)`,
    `TRAINER, LEADERSHIP AND INTEGRITY CLUB INT’L`,
       `TEAM CONSULTANT FAITHHOUSE WORLD RELIEF FOUNDATION`,
      `LECTURER, FREE ADULT PROGRAM (DOMINION EDUCATION CENTER)`,
     ` PRO CHANCELLOR LEAD-EDGE UNIVERSITY (FIRST LEVEL SCOPU APPROVED)`,
    ` TEAM LEADER SCHOOL OF GOVERNANCE, ECONOMICS AND LEADERHIP ABUJA`,
     `FACILITOR OWERRI BUSINESS AND MONEY SCHOOL`,
    ` MEMBER/ HUMAN DEVELOPMENT EXPERT UNITED NATION (INTERNATIONAL ASSOCIATION OF WORLD PEACE ADVOCATE)`,
  ]
 
  const christianBackground = [
    
    `Rev Barr Ikenna Emmanuel gave his life to Christ in 1990 IN ASSEMBLIES OF GOD CHURCH ROYCE ROAD OWERRI Imo state and was filled with the Holy Ghost baptism in 1991. He spent many years serving the Lord under the LEADERSHIP OF ASSEMBLIES OF GOD CHURCH. `,
    `In 1997, as an undergraduate of Federal University of Technology Owerri, He had an encounter with a book someone forgot in their microbiology lab. written by Bro Gbile of PEACE HOUSE GBOKO” what God wants in a vessel” and the book”RELEASING THE SUPERNATURAL BY BISHOP DAVID OYEDEPO of LIVING FAITH CHURCH. The impact of these two books opened him into an all round personal discovery and boldness in Christ.`,
    `This impact has not left him till date, as he often consults them). It was the combination of this two ministry outlets that gave birth to the name FAITHHOUSE.`,
    `on 4th April 1997, God spoke through Bro Gbile at GO-FEST STUDENTS CONFERENCE  at REDEMPTION CAMP, Shagamu Lagos in the form of questions; what do you want to be remembered for, do you want to raise men or Babel?. These words hit him hard that he wanted to leave school for missions, but for the wise council of some CAPRO resource persons; this led him to be actively involved in campus ministry as he needed to serve God in school while he makes the vision clearer (the word came that if he continued in this zeal that he (God), will show him what to do in twelve (12) years time.`,
    `The desire for this vision of leadership and national relevance came so strong on 3rd April 2002, a year after his graduation from the high institution. He has to leave for Lagos to attend the one month intensive course of WORD OF FAITH BIBLE INSTITUTE (WOFBI) of WINNERS CHAPEL. The courses offered in that school exposed his ignorance and backwardness in the things of God which made him cry. After the course he decided to stay back in Lagos and work for some time. while working for gold link insurance company Lagos, he was still not satisfied with life (as his director kept motivating them to discover what God has planned for them and run with it) in search of fulfillment he resigned, went and enrolled for the one (1) year full time DIPLOMA PROGRAMME IN PRACTICAL MINISTRY of WOFBI, Kaduna (even in the heat of the religious riot then) he graduated as one of the best students with grade ‘”DISTINCTION”.`,
    `while in the school on 12th July 2003, 8am, he heard a clear voice saying, restoration of diverted destinies, raising a people of integrity and standard and he wrote it down according toHab.2v2
    After graduation and commissioning by bishop David o. Abioye of WINNERS CHAPEL. `,
    `He served in PRAISE CENTER CHURCH under The Leadership of Bishop Starford Nwaogu. At the end of his service as directed by God he was blessed and released in good faith in 2010.`,
    `He went back to God in prayers and study on the next step (as he has registered an NGO on leadership and National Transformation) God led him to the book where he wrote the vision “Restoration of diverted destinies raising a people of integrity and standard”, In the course of prayers and enquiry in the spirit, he kept asking God this question, If this people are raised what will be their job?.It was still in this quest that he came in contact with a tape by Pastor David Ogbueli’s (DOMINION CITY) on leadership and National transformation, and while listening to the tape, God said they will “be passionately committed to Leadership development and national transformation”, hence the name FAITHHOUSE TRANSFORMATION ASSEMBLY, and the vision statement
    “RESTORATION OF DIVERTED DESTINIES RAISING A PEOPLE OF INTEGRITY AND STANDARD WHO ARE PASSIONATELY COMMITED TO LEADERSHIP DEVELOPMENT AND NATIONAL TRANSFORMATION”,`,
    `With less than Ten thousand (N10,000 )naira in his account and faith in God’s word, he set out to start a prayer meeting with few friends in his sitting room on Thursday8th April 2010 (Which was exactly 12years of the encounter he had in 1997) and Sunday11th 2010 he had an exciting first service (made up of him and his wife with their two children).`,
  ]

  const passionForNationBuilding = [
    `Having lived in Imo state for over thirty eight (38) years and actively involved in the
     quest for the transformation of Imo state I have come to discover seven major problems in this state. `,
     `They are Destruction of good Governance, Dismantled economy, Eroded civil service, Lowered standard of education, 
    Misappropriation cum mismanagement of common wealth, Inconsistent and scary policies that scares investors`,
    `However I will like to make it clear to the body of Christ that the major problem in Imo state is highly spiritual and this is the primary force behind my running for the office of the governor of Imo State. There is a dire need for the church to rise up and withstand the gate of hell from hijacking the number one seat of government in this state and using it as a tool to buffet and oppress the church of Jesus Christ. This burden came to me in 2016 after many years of praying and fasting for God to intervene for the church in Imo state and beyond from the pending satanic Islamic agenda that is targeted to wipe away the church of Jesus Christ. `,
    `There is an urgent need for the church of Jesus Christ to unite and install an intelligent and anointed man like Rev Barr Ikenna Emmanuel into the seat of government as the next governor of Imo state. This is because of the major role Imo state has been ordained by God to play in his end time global spiritual, socio-economic and socio-poltical revival that will herald the coming of our Lord Jesus Christ. It is no longer a hidden thing for those who are spiritually alert that there is a major plan to use the seat of government and Islamize this nation.`,
    `It is heartbroken that this Islamic agenda have gone over ninety percent as we have witnessed all the major federal leadership positions that make policies and laws that governs this nation occupied by Islamic jihadist.  Just with a stroke of pen sharia law can be fully enshrined as part of the constitution of Nigeria that can be practiced anywhere in all the state (let us not be deceived, this can be made possible). If nothing is done so fast, the next four years in this country will be very horrible for the church. I know that God has anointed and prepared me to be the Esther that will go ahead for the preservation of the church in this state and beyond. By the grace of God I am the anointed david that has been raised by God to bring down this goliaths that have been positioned to buffet the church `,
    `The plan of God for the State is for Imo to be the socio-political, educational and spiritual resource center in Africa and this is what God have placed in my heart and trained me for over the years.
    If the church misses it this time around we will go into another years of horrible captivity but God forbid. Let us rise up and unite and stop the gate of hell. “God will do it” is the philosophy behind irresponsible church but “God will use us to do it as we step out” is the philosophy behind responsible church that will be relevant for heaven in these last days.`,
    `May the will of God be done in Imo State and Nation. Amen`,
    `Documented by Rev. Barr. Ikenna Emmanuel during the 2019 Imo state Gubernatorial Elections`
  ]


  return {profileSummary, pesronalProfile, academicQualification, personalPhilosophy,
    leadershipExperience, christianBackground, passionForNationBuilding }
}

const barrNkiru = () => {

  const pesronalProfile = [
    `    She IS the  Assistant Deputy Registrar and Head of a Legal Department of a Higher institution. 
    `,
    `She is extensively involved in Women development in Africa through the Transformed Women International 
    Leadership Forum as the founder and President.
    `,
    `She is poised to set up further programs and its Statistical Support System for the Development of Africa in future.
    ` ,
    ` She is an international  speaker and trainer. married with four children.`
  ]
  const academicQualification = [` She studied Library Science, Law and  Education Technology`,
    `She has vast experience in Pertinent federal, state, and local laws, regulations and court decisions relating to education and Business `,
    `She has a Professional Diploma in Education (PDE) Certificate, and a Masters in Educational 
    Technology which has earned her membership in TEACHERS REGISTRATION COUNCIL OF NIGERIA (TRCN).`
  ]
  const personalPhilosophy = [ 
    `As a result of her dynamic vision to build a strong family system for Africa women, she has commits her time in advocating for 
    values re-orientation for women and the girl child right related issues.,`,

    `She displayes high profile stand on the education of women and their involvement in global LEADERSHIP especially in Africa.`

  ]
  const profileSummary = `Nkiru Ikenna-Emmanuel is a Nigerian certified Lawyer of over 1
  8 years of experience in the area of Administration, Education Technology  and  Women right.
  She is a University  management expert specializing in the area of Law of Contract, 
  Staffing ,and Administrative law. She has
   a  personal vision to transforming society by building healthy and strong family institutions, 
   defending the less privileged through a functional process of advocacy and education. She co-leads
    the Faithhouse int'l with her husband, Barr. Ikenna Emmanuel.`
  const leadershipExperience = [
    ` She serves as the legal adviser to the Provost of Alvan Ikoku Federal College of Education, Owerri Imo state (A.I.F.C.E).`,
    `    She is currently  the Director of Women, Law and Family Development Centre (WLFDCN), a nongovernmental , non-profit making training research and advocacy arm/ specializing in socio-economic/legal issues with emphasis on gender perspectives under i- goldAfrica .
    `,
    `    She is profound speaker, teacher, mentor, trainer and life coach to many .
    `,  
    `She has contributed significantly to the academic community and the society at large through various not for profit education, 
    leadership, human development resource platforms, that train undergraduates in character, skills, and competence for maximum performance`,
  
  ]
  const christianBackground = []
  const passionForNationBuilding = [`Barrister Nkiru Ikenna-emmanuel  is in the forefront of activism for women’s rights including the current “Intelligent  women in democracy and governance” campaign, participation in Gender of the International Centre for leadership ,Diplomacy  ,Human and economic Development 
  `]
  

  return {profileSummary, pesronalProfile, academicQualification, personalPhilosophy, 
    leadershipExperience, christianBackground, passionForNationBuilding }

}

