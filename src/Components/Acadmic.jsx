import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
export default function Acadmic() {
    return (
        <div className='container mx-auto p-4'>
            <div className='text-3xl md:text-5xl font-bold text-gray-300 p-5 md:p-10 mb-10 about_text w-full'>
                <span>A</span>
                <span>C</span>
                <span>A</span>
                <span>D</span>
                <span>M</span>
                <span>I</span>
                <span>C</span>
                <span>S</span>
            </div>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="1st sem"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                // icon={<WorkIcon />}
                >
                    <p className='p-0 m-0'>
                        Single user space (kiosk)
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2nd sem"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                // icon={<WorkIcon />}
                >
                    <p>
                        Residence design (3bhk)
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="3rd sem"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                // icon={<WorkIcon />}
                >
                    <p>
                        Campus design (kindergarten)
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="4th sem"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                // icon={<WorkIcon />}
                >
                    <p>
                        Climate responsive design (island resort group of 2)
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="5th sem"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                // icon={<SchoolIcon />}
                >
                    <p>
                        Environmental design (architecture campus)
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="6th sem"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                // icon={<SchoolIcon />}
                >
                    <p>
                        Public buildings (artisan's village)
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="7th sem"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                // icon={<SchoolIcon />}
                >
                    <p>
                        Human centric campus design (high rise residence)
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="8th sem"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                // icon={<SchoolIcon />}
                >
                    <p>
                        Practical Training
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="9th sem"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                // icon={<SchoolIcon />}
                >
                    <p>
                        Urban Context Studio (multi - use development)
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="10th"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                // icon={<SchoolIcon />}
                >
                    <p>
                        Thesis (Eco- wellness resort)
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}
