import React, { useState } from 'react';
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi";
import './FAQ.css'

const FAQ = () => {
    const [questionClicked, setQuestionClick] = useState([true, false, false, false, false])
    const handleQuestionClicked = (index) => {
        // const updatedQuestionClicked = [...questionClicked];
        // updatedQuestionClicked[index] = !updatedQuestionClicked[index];
        const updatedQuestionClicked = questionClicked.map((value, i) => i === index ? !value : false);
        setQuestionClick(updatedQuestionClicked)
    }
    // console.log(questionClicked)
    return (
        <div className='faqs'>
            <div className="faqs-container container">
                <div className="faq-header">
                    <h2>Feequently Asked Questions</h2>
                </div>
                <div className="faqs-content">
                    <div className="faq-item">
                        <div className="faq-item-question" onClick={() => handleQuestionClicked(0)}>
                            <b>How does Langugerian work?</b>
                            {
                                questionClicked[0] ? <HiOutlineChevronUp /> : <HiOutlineChevronDown />
                            }
                        </div>
                        <div className={`faq-item-answer ${questionClicked[0] ? 'show-faq' : 'hide-faq'}`}>
                            <p>Languagerian helps you achieve your language learning ambitions. Find your ideal teacher and book a 1-on-1 lesson. There's no subscription or rigid schedule. Learn when you want, as much as you want. If you'd prefer to learn without a teacher, you can use Languagerian's handy learning tools. Improve your vocabulary, train your ear with podcasts, and put your knowledge to the test with quizzes. The Languagerian Community is always sharing new content with language lovers.</p>
                        </div>
                    </div>
                    <div className="faq-item">
                        <div className="faq-item-question" onClick={() => handleQuestionClicked(1)}>
                            <b>Is Languagerian worth it?</b>
                            {
                                questionClicked[1] ? <HiOutlineChevronUp /> : <HiOutlineChevronDown />
                            }
                        </div>
                        <div className={`faq-item-answer ${questionClicked[1] ? 'show-faq' : 'hide-faq'}`}>
                            <p>Yes! Languagerian offers the freedom and flexibility to learn with a teacher you like, at a price you can afford, with a schedule that works for you.

                                You aren't locked into any hard commitments. Lessons are pay as you go, and teachers set their own prices. Browse a marketplace of teachers with different teaching styles and curriculums until you find the teacher that's right for you.

                                Learning doesn't always have to take place in a classroom. Share posts with the Community and receive feedback from other language learners. Use Languagerian's learning tool to discover new words with vocabulary sets, listen to podcasts from around the world, practice with prompts, and more!</p>
                        </div>
                    </div>
                    <div className="faq-item">
                        <div className="faq-item-question" onClick={() => handleQuestionClicked(2)}>
                            <b>What devices or software do I need to take classes?</b>
                            {
                                questionClicked[2] ? <HiOutlineChevronUp /> : <HiOutlineChevronDown />
                            }
                        </div>
                        <div className={`faq-item-answer ${questionClicked[2] ? 'show-faq' : 'hide-faq'}`}>
                            <p>You will need a device with a camera. It is strongly recommended that you prepare a set of headphones and a microphone for an excellent class experience.</p>
                        </div>
                    </div>
                    <div className="faq-item">
                        <div className="faq-item-question" onClick={() => handleQuestionClicked(3)}>
                            <b>How do I become a teacher on Languagerian</b>
                            {
                                questionClicked[3] ? <HiOutlineChevronUp /> : <HiOutlineChevronDown />
                            }
                        </div>
                        <div className={`faq-item-answer ${questionClicked[3] ? 'show-faq' : 'hide-faq'}`}>
                            <p>Anyone is welcome to apply to be a teacher on Languagerian. You can apply by clicking here

                                There are two types of teachers on Langaugerian, community tutors and professional teachers. Professional teachers have proven experience teaching and the qualifications required to help you learn a language efficiently.

                                Community tutors are passionate language-lovers who want to share their knowledge with others.</p>
                        </div>
                    </div>
                    <div className="faq-item">
                        <div className="faq-item-question" onClick={() => handleQuestionClicked(4)}>
                            <b>I want to take courses now what do I do?</b>
                            {
                                questionClicked[4] ? <HiOutlineChevronUp /> : <HiOutlineChevronDown />
                            }
                        </div>
                        <div className={`faq-item-answer ${questionClicked[4] ? 'show-faq' : 'hide-faq'}`}>
                            <p>If you would like to have a lesson as soon as possible, Lesson Invitation may be the best choice for you. Lesson invitation is available for the web, iOS, and Android, and it allows a teacher to invite his/her students to take individual and package lessons.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;