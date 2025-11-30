export interface Shloka {
  id: number;
  sanskrit: string;
  translation: string;
}

export interface Chapter {
  id: number;
  title: string;
  subtitle: string;
  shlokas: Shloka[];
}

export const chapters: Chapter[] = [
  {
    id: 1,
    title: "अर्जुनविषादयोग",
    subtitle: "Arjuna's Dilemma",
    shlokas: [
      {
        id: 1,
        sanskrit: "धृतराष्ट्र उवाच।\nधर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः।\nमामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय॥१॥",
        translation: "Dhritarashtra said: O Sanjaya, after my sons and the sons of Pandu assembled in the place of pilgrimage at Kurukshetra, desiring to fight, what did they do?"
      },
      {
        id: 2,
        sanskrit: "सञ्जय उवाच।\nदृष्ट्वा तु पाण्डवानीकं व्यूढं दुर्योधनस्तदा।\nआचार्यमुपसङ्गम्य राजा वचनमब्रवीत्॥२॥",
        translation: "Sanjaya said: O King, after looking over the army arranged in military formation by the sons of Pandu, King Duryodhana went to his teacher and spoke the following words."
      },
      {
        id: 3,
        sanskrit: "पश्यैतां पाण्डुपुत्राणामाचार्य महतीं चमूम्।\nव्यूढां द्रुपदपुत्रेण तव शिष्येण धीमता॥३॥",
        translation: "O my teacher, behold the great army of the sons of Pandu, so expertly arranged by your intelligent disciple, the son of Drupada."
      }
    ]
  },
  {
    id: 2,
    title: "सांख्ययोग",
    subtitle: "The Yoga of Knowledge",
    shlokas: [
      {
        id: 1,
        sanskrit: "सञ्जय उवाच।\nतं तथा कृपयाविष्टमश्रुपूर्णाकुलेक्षणम्।\nविषीदन्तमिदं वाक्यमुवाच मधुसूदनः॥१॥",
        translation: "Sanjaya said: Seeing Arjuna full of compassion, his mind depressed, his eyes full of tears, Madhusudana, Krishna, spoke the following words."
      },
      {
        id: 2,
        sanskrit: "श्रीभगवानुवाच।\nकुतस्त्वा कश्मलमिदं विषमे समुपस्थितम्।\nअनार्यजुष्टमस्वर्ग्यमकीर्तिकरमर्जुन॥२॥",
        translation: "The Supreme Lord said: My dear Arjuna, how have these impurities come upon you? They are not at all befitting a man who knows the value of life. They lead not to higher planets but to infamy."
      },
      {
        id: 3,
        sanskrit: "क्लैब्यं मा स्म गमः पार्थ नैतत्त्वय्युपपद्यते।\nक्षुद्रं हृदयदौर्बल्यं त्यक्त्वोत्तिष्ठ परन्तप॥३॥",
        translation: "O son of Pritha, do not yield to this degrading impotence. It does not become you. Give up such petty weakness of heart and arise, O chastiser of the enemy!"
      }
    ]
  },
  {
    id: 3,
    title: "कर्मयोग",
    subtitle: "The Yoga of Action",
    shlokas: [
      {
        id: 1,
        sanskrit: "अर्जुन उवाच।\nज्यायसी चेत्कर्मणस्ते मता बुद्धिर्जनार्दन।\nतत्किं कर्मणि घोरे मां नियोजयसि केशव॥१॥",
        translation: "Arjuna said: O Janardana, O Keshava, if You consider knowledge superior to action, then why do You engage me in this terrible warfare?"
      },
      {
        id: 2,
        sanskrit: "व्यामिश्रेणेव वाक्येन बुद्धिं मोहयसीव मे।\nतदेकं वद निश्चित्य येन श्रेयोऽहमाप्नुयाम्॥२॥",
        translation: "With these seemingly contradictory statements, You are confusing my understanding. Please tell me decisively which one is most beneficial for me."
      },
      {
        id: 3,
        sanskrit: "श्रीभगवानुवाच।\nलोकेऽस्मिन्द्विविधा निष्ठा पुरा प्रोक्ता मयानघ।\nज्ञानयोगेन साङ्ख्यानां कर्मयोगेन योगिनाम्॥३॥",
        translation: "The Supreme Lord said: O sinless Arjuna, I have already explained that there are two classes of men who realize the Self. Some are inclined to understand it by empirical philosophy, and others by devotional service."
      }
    ]
  }
];

export const heroQuotes = [
  {
    sanskrit: "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत",
    translation: "Whenever there is a decline in righteousness and an increase in unrighteousness, O Arjuna, at that time I manifest myself on earth.",
    chapter: "Chapter 4, Verse 7"
  },
  {
    sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन",
    translation: "You have a right to perform your prescribed duty, but you are not entitled to the fruits of action.",
    chapter: "Chapter 2, Verse 47"
  },
  {
    sanskrit: "योगस्थः कुरु कर्माणि सङ्गं त्यक्त्वा धनञ्जय",
    translation: "Perform your duty equipoised, O Arjuna, abandoning all attachment to success or failure.",
    chapter: "Chapter 2, Verse 48"
  },
  {
    sanskrit: "श्रेयान्स्वधर्मो विगुणः परधर्मात्स्वनुष्ठितात्",
    translation: "It is far better to perform one's natural prescribed duty, though tinged with faults, than to perform another's prescribed duty, though perfectly.",
    chapter: "Chapter 3, Verse 35"
  },
  {
    sanskrit: "सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज",
    translation: "Abandon all varieties of dharmas and simply surrender unto Me alone. I shall protect you from all sinful reactions; do not fear.",
    chapter: "Chapter 18, Verse 66"
  }
];
