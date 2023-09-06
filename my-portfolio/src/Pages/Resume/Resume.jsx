// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { browsers, database, education, frameworks, graphic, others_li_fa, skils, tools, windows } from './ResumeFile';
import EducationCard from '../../components/AllCartdItem/EducationCard';
import SkillCard from '../../components/AllCartdItem/SkillCard';
import FrameworkCard from '../../components/AllCartdItem/FrameworkCard';
import BrowserCard from '../../components/AllCartdItem/BrowserCard';
import RelatedCard from '../../components/AllCartdItem/RelatedCard';
import ToolsCard from '../../components/AllCartdItem/ToolsCard';
import DataBaseCard from '../../components/AllCartdItem/DataBaseCard';
import GraphicCard from '../../components/AllCartdItem/GraphicCard';
import OperatingCard from '../../components/AllCartdItem/OperatingCard';


const Resume = () => {
    return (
        <div className='py-5 px-10'>
            <h2 className='text-3xl font-medium mb-3'>Resume</h2>
            <div className='w-20 h-1 bg-pink-500 rounded-full'></div>
            <div className='mt-12'>
                <div className='flex gap-3'>
                    <div className='text-para-white text-3xl relative'>
                        <FontAwesomeIcon icon={faGraduationCap} />
                        <div className="h-60 w-1 bg-para-white top-8 absolute left-4"></div>
                    </div>
                    <h3 className='text-2xl font-medium'> Education</h3>
                </div>
                <div className='ml-12 mt-8'>
                    {
                        education.map((e, i) => <EducationCard key={i} data={e}></EducationCard>)
                    }
                </div>
                <div className='mt-12'>
                <h3 className='text-2xl font-medium'>My skills</h3>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-12'>
                    <div >
                        <h4 className='text-2xl font-medium mb-6'>Languages</h4>
                        <div>
                            {
                                skils.map((e,i)=> <SkillCard key={i} data={e}></SkillCard>)
                            }
                        </div>
                    </div>
                    <div>
                        <h4 className='text-2xl font-medium mb-6'>Frameworks & Librarys</h4>
                        <div>
                            {
                                frameworks.map((e,i)=> <FrameworkCard key={i} data={e}></FrameworkCard>)
                            }
                        </div>
                    </div>
                    <div>
                        <h4 className='text-2xl font-medium mb-6'>Browsers</h4>
                        <div>
                            {
                                browsers.map((e,i)=> <BrowserCard key={i} data={e}></BrowserCard>)
                            }
                        </div>
                    </div>
                    <div>
                        <h4 className='text-2xl font-medium mb-6'>Related</h4>
                        <div>
                            {
                                others_li_fa.map((e,i)=> <RelatedCard key={i} data={e}></RelatedCard>)
                            }
                        </div>
                    </div>
                    <div>
                        <h4 className='text-2xl font-medium mb-6'>Tools</h4>
                        <div>
                            {
                               tools.map((e,i)=> <ToolsCard key={i} data={e}></ToolsCard>)
                            }
                        </div>
                    </div>
                    <div>
                        <h4 className='text-2xl font-medium mb-6'>DataBase</h4>
                        <div>
                            {
                               database.map((e,i)=> <DataBaseCard key={i} data={e}></DataBaseCard>)
                            }
                        </div>
                        <h4 className='text-2xl font-medium my-6'>Graphics</h4>
                        <div>
                            {
                               graphic.map((e,i)=> <GraphicCard key={i} data={e}></GraphicCard>)
                            }
                        </div>
                    </div>
                    <div>
                        <h4 className='text-2xl font-medium mb-6'>Operating System</h4>
                        <div>
                            {
                               windows.map((e,i)=> <OperatingCard key={i} data={e}></OperatingCard>)
                            }
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;