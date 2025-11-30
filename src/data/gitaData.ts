export interface Shloka {
  id: number;
  sanskrit: string;
  translation: string;
}

export interface Chapter {
  id: number;
  title: string;
  shortTitle?: string;
  subtitle: string;
  shlokas: Shloka[];
}

export const chapters: Chapter[] = [
  {
    id: 1,
    title: "अर्जुनविषादयोगः",
    shortTitle: "अध्याय १",
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
    title: "सांख्ययोगः",
    shortTitle: "अध्याय २",
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
    title: "कर्मयोगः",
    shortTitle: "अध्याय ३",
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
  },
  {
    id: 4,
    title: "ज्ञानकर्मसंन्यासयोगः",
    shortTitle: "अध्याय ४",
    subtitle: "The Yoga of Wisdom",
    shlokas: [
      {
        id: 1,
        sanskrit: "श्रीभगवानुवाच।\nइमं विवस्वते योगं प्रोक्तवानहमव्ययम्।\nविवस्वान्मनवे प्राह मनुरिक्ष्वाकवेऽब्रवीत्॥१॥",
        translation: "The Blessed Lord said: I instructed this imperishable science of yoga to the sun-god, Vivasvan, and Vivasvan instructed it to Manu, the father of mankind, and Manu in turn instructed it to Ikshvaku."
      }
    ]
  },
  {
    id: 5,
    title: "कर्मसंन्यासयोगः",
    shortTitle: "अध्याय ५",
    subtitle: "The Yoga of Renunciation",
    shlokas: [
      {
        id: 1,
        sanskrit: "अर्जुन उवाच।\nसंन्यासं कर्मणां कृष्ण पुनर्योगं च शंससि।\nयच्छ्रेय एतयोरेकं तन्मे ब्रूहि सुनिश्चितम्॥१॥",
        translation: "Arjuna said: O Krishna, first of all You ask me to renounce work, and then again You recommend work with devotion. Now will You kindly tell me definitely which of the two is more beneficial?"
      }
    ]
  },
  {
    id: 6,
    title: "आत्मसंयमयोगः",
    shortTitle: "अध्याय ६",
    subtitle: "The Yoga of Meditation",
    shlokas: [
      {
        id: 1,
        sanskrit: "श्रीभगवानुवाच।\nअनाश्रितः कर्मफलं कार्यं कर्म करोति यः।\nस संन्यासी च योगी च न निरग्निर्न चाक्रियः॥१॥",
        translation: "The Blessed Lord said: One who is unattached to the fruits of his work and who works as he is obligated is in the renounced order of life, and he is the true mystic, not he who lights no fire and performs no work."
      }
    ]
  },
  {
    id: 7,
    title: "ज्ञानविज्ञानयोगः",
    shortTitle: "अध्याय ७",
    subtitle: "The Yoga of Knowledge and Wisdom",
    shlokas: [
      {
        id: 1,
        sanskrit: "श्रीभगवानुवाच।\nमय्यासक्तमनाः पार्थ योगं युञ्जन्मदाश्रयः।\nअसंशयं समग्रं मां यथा ज्ञास्यसि तच्छृणु॥१॥",
        translation: "The Blessed Lord said: Now hear, O son of Pritha, how by practicing yoga in full consciousness of Me, with mind attached to Me, you can know Me in full, free from doubt."
      }
    ]
  },
  {
    id: 8,
    title: "अक्षरब्रह्मयोगः",
    shortTitle: "अध्याय ८",
    subtitle: "The Yoga of the Imperishable Brahman",
    shlokas: [
      {
        id: 1,
        sanskrit: "अर्जुन उवाच।\nकिं तद्ब्रह्म किमध्यात्मं किं कर्म पुरुषोत्तम।\nअधिभूतं च किं प्रोक्तमधिदैवं किमुच्यते॥१॥",
        translation: "Arjuna inquired: O my Lord, O Supreme Person, what is Brahman? What is the self? What are fruitive activities? What is this material manifestation? And what are the demigods?"
      }
    ]
  },
  {
    id: 9,
    title: "राजविद्याराजगुह्ययोगः",
    shortTitle: "अध्याय ९",
    subtitle: "The Yoga of Royal Knowledge",
    shlokas: [
      {
        id: 1,
        sanskrit: "श्रीभगवानुवाच।\nइदं तु ते गुह्यतमं प्रवक्ष्याम्यनसूयवे।\nज्ञानं विज्ञानसहितं यज्ज्ञात्वा मोक्ष्यसेऽशुभात्॥१॥",
        translation: "The Supreme Lord said: My dear Arjuna, because you are never envious of Me, I shall impart to you this most confidential knowledge and realization, knowing which you shall be relieved of the miseries of material existence."
      }
    ]
  },
  {
    id: 10,
    title: "विभूतियोगः",
    shortTitle: "अध्याय १०",
    subtitle: "The Yoga of Divine Glories",
    shlokas: [
      {
        id: 1,
        sanskrit: "श्रीभगवानुवाच।\nभूय एव महाबाहो शृणु मे परमं वचः।\nयत्तेऽहं प्रीयमाणाय वक्ष्यामि हितकाम्यया॥१॥",
        translation: "The Supreme Lord said: Listen again, O mighty-armed Arjuna. Because you are My dear friend, for your benefit I shall speak to you further, giving knowledge that is better than what I have already explained."
      }
    ]
  },
  {
    id: 11,
    title: "विश्वरूपदर्शनयोगः",
    shortTitle: "अध्याय ११",
    subtitle: "The Yoga of the Universal Form",
    shlokas: [
      {
        id: 1,
        sanskrit: "अर्जुन उवाच।\nमदनुग्रहाय परमं गुह्यमध्यात्मसंज्ञितम्।\nयत्त्वयोक्तं वचस्तेन मोहोऽयं विगतो मम॥१॥",
        translation: "Arjuna said: By my hearing the instructions You have kindly given me about these most confidential spiritual subjects, my illusion has now been dispelled."
      }
    ]
  },
  {
    id: 12,
    title: "भक्तियोगः",
    shortTitle: "अध्याय १२",
    subtitle: "The Yoga of Devotion",
    shlokas: [
      {
        id: 1,
        sanskrit: "अर्जुन उवाच।\nएवं सततयुक्ता ये भक्तास्त्वां पर्युपासते।\nये चाप्यक्षरमव्यक्तं तेषां के योगवित्तमाः॥१॥",
        translation: "Arjuna inquired: Which are considered to be more perfect, those who are always properly engaged in Your devotional service or those who worship the impersonal Brahman, the unmanifested?"
      }
    ]
  },
  {
    id: 13,
    title: "क्षेत्रक्षेत्रज्ञविभागयोगः",
    shortTitle: "अध्याय १३",
    subtitle: "The Yoga of the Field and Knower",
    shlokas: [
      {
        id: 1,
        sanskrit: "अर्जुन उवाच।\nप्रकृतिं पुरुषं चैव क्षेत्रं क्षेत्रज्ञमेव च।\nएतद्वेदितुमिच्छामि ज्ञानं ज्ञेयं च केशव॥१॥",
        translation: "Arjuna said: O my dear Krishna, I wish to know about prakriti [nature], Purusha [the enjoyer], and the field and the knower of the field, and of knowledge and the object of knowledge."
      }
    ]
  },
  {
    id: 14,
    title: "गुणत्रयविभागयोगः",
    shortTitle: "अध्याय १४",
    subtitle: "The Yoga of the Three Gunas",
    shlokas: [
      {
        id: 1,
        sanskrit: "श्रीभगवानुवाच।\nपरं भूयः प्रवक्ष्यामि ज्ञानानां ज्ञानमुत्तमम्।\nयज्ज्ञात्वा मुनयः सर्वे परां सिद्धिमितो गताः॥१॥",
        translation: "The Supreme Lord said: I shall again declare to you this supreme wisdom, the best of all knowledge, knowing which all the sages have attained the supreme perfection."
      }
    ]
  },
  {
    id: 15,
    title: "पुरुषोत्तमयोगः",
    shortTitle: "अध्याय १५",
    subtitle: "The Yoga of the Supreme Person",
    shlokas: [
      {
        id: 1,
        sanskrit: "श्रीभगवानुवाच।\nऊर्ध्वमूलमधःशाखमश्वत्थं प्राहुरव्ययम्।\nछन्दांसि यस्य पर्णानि यस्तं वेद स वेदवित्॥१॥",
        translation: "The Supreme Lord said: It is said that there is an imperishable banyan tree that has its roots upward and its branches down and whose leaves are the Vedic hymns. One who knows this tree is the knower of the Vedas."
      }
    ]
  },
  {
    id: 16,
    title: "दैवासुरसम्पद्विभागयोगः",
    shortTitle: "अध्याय १६",
    subtitle: "The Yoga of Divine and Demoniac Qualities",
    shlokas: [
      {
        id: 1,
        sanskrit: "श्रीभगवानुवाच।\nअभयं सत्त्वसंशुद्धिर्ज्ञानयोगव्यवस्थितिः।\nदानं दमश्च यज्ञश्च स्वाध्यायस्तप आर्जवम्॥१॥",
        translation: "The Supreme Lord said: Fearlessness; purification of one's existence; cultivation of spiritual knowledge; charity; self-control; performance of sacrifice; study of the Vedas; austerity; simplicity."
      }
    ]
  },
  {
    id: 17,
    title: "श्रद्धात्रयविभागयोगः",
    shortTitle: "अध्याय १७",
    subtitle: "The Yoga of Three Types of Faith",
    shlokas: [
      {
        id: 1,
        sanskrit: "अर्जुन उवाच।\nये शास्त्रविधिमुत्सृज्य यजन्ते श्रद्धयान्विताः।\nतेषां निष्ठा तु का कृष्ण सत्त्वमाहो रजस्तमः॥१॥",
        translation: "Arjuna said: O Krishna, what is the situation of those who do not follow the principles of scripture but worship according to their own imagination? Are they in goodness, in passion or in ignorance?"
      }
    ]
  },
  {
    id: 18,
    title: "मोक्षसंन्यासयोगः",
    shortTitle: "अध्याय १८",
    subtitle: "The Yoga of Liberation",
    shlokas: [
      {
        id: 1,
        sanskrit: "अर्जुन उवाच।\nसंन्यासस्य महाबाहो तत्त्वमिच्छामि वेदितुम्।\nत्यागस्य च हृषीकेश पृथक्केशिनिषूदन॥१॥",
        translation: "Arjuna said: O mighty-armed one, I wish to understand the purpose of renunciation [tyaga] and of the renounced order of life [sannyasa], O killer of the Keshi demon, master of the senses."
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
