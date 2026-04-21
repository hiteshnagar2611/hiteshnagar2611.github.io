import React from 'react';

const url = (filePath) => `${import.meta.env.BASE_URL}${filePath.replace(/^\//, '')}`;

const Hitesh = () => {
    const member = {
        name: 'Hitesh Nagar',
        role: 'Project Associate',
        image: url('/images/hitesh.jpg'),
        bio: `I am a Project Associate at CSIR-IGIB in New Delhi, where I work with Dr. Lipi Thukral. My current research focuses on protein language models (PLMs), graph neural networks (GNNs), and AI for biology.

I have been fortunate to work with amazing mentors across different institutions. In 2025, I worked at Secure Meters Limited with Rahul Mathur on network security. In summer 2024, I worked with Jyothi Vedurada at IIT Hyderabad on API misuse prediction, and with Jimson Mathew at IIT Patna on automated catalogue creation using computer vision. In summer 2023, I was part of the VL2G team at IIT Jodhpur, led by Anand Mishra, where I developed a scene-text annotation tool for Indian languages.
My research interests lie in deep learning, natural language processing, and large language models. I am particularly interested in building AI applications across domains, bridging research with real-world impact.`,
        education: [
            {
                institution: 'MBM University',
                location: 'Jodhpur, India',
                date: 'June 2025',
                logo: url('/images/logos/mbm.png')
            }
        ],
        experience: [
            {
                company: 'CSIR-IGIB',
                position: 'Project Associate',
                location: 'New Delhi',
                date: 'Present',
                logo: url('/images/logos/csir.jpg')
            },
            {
                company: 'Secure Meters Limited',
                position: 'Graduate Engineer trainee (Network Security)',
                location: 'Udaipur, RJ',
                date: 'July 2025 - Present',
                logo: url('/images/logos/secure.jpeg')
            },
            {
                company: 'Secure Meters Limited',
                position: 'Software Engineering Intern',
                location: 'Udaipur, RJ',
                date: 'Jan 2025 - Feb 2025',
                logo: url('/images/logos/secure.jpeg')
            },
            {
                company: 'Indian Institute of Technology Hyderabad',
                position: 'Summer Intern',
                location: 'Sangareedy, TS',
                date: 'June 2024 - July 2024',
                logo: url('/images/logos/iith.png')
            },
            {
                company: 'Indian Institute of Technology Patna',
                position: 'Computer Vision Intern',
                location: 'Remote',
                date: 'March 2024 - Apr 2024',
                logo: url('/images/logos/iitp.png')
            },
            {
                company: 'Indian Institute of Technology Goa',
                position: 'NSM Intern',
                location: 'Remote',
                date: 'Jan 2024 - Feb 2024',
                logo: url('/images/logos/iitg.png')
            },
            {
                company: 'Indian Institute of Technology Jodhpur',
                position: 'Project Intern',
                location: 'Jodhpur, RJ',
                date: 'June 2023 - July 2023',
                logo: url('/images/logos/iitj.jpg')
            },
            {
                company: 'Oil and Natural Gas Corporation',
                position: 'Summer Trainee',
                location: 'Dehradun',
                date: 'June 2023 - July 2023',
                logo: url('/images/logos/ongc.png')
            }
        ],
        awards: ['Research Assistantship'],
        publications: 2,
        joined: '2024'
    };

    return (
        <div className="min-h-screen" style={{ backgroundColor: '#ffffff', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
            <header className="py-12 px-8">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold mb-2">
                        <span className="font-bold">{member.name.split(' ')[0]}</span> {member.name.split(' ').slice(1).join(' ')}
                    </h1>
                </div>
            </header>

            <div className="max-w-4xl mx-auto px-8 pb-16">
                <div className="clearfix">
                    <div className="profile float-right ml-8 mb-8">
                        <img
                            src={member.image}
                            alt={member.name}
                            className="w-64 h-64 rounded-lg shadow-lg object-cover"
                            onError={(e) => {
                                e.target.src = 'https://via.placeholder.com/256x256?text=Hitesh+Nagar';
                            }}
                        />
                        <div className="more-info mt-4 text-sm text-gray-600">
                            <p>Computational Biology Lab</p>
                            <p>CSIR-Institute of Genomics and Integrative Biology</p>
                            <p>Sukhdev Vihar, Mathura Road</p>
                            <p>New Delhi - 110020, India</p>
                        </div>
                    </div>

                    <div className="clearfix text-gray-700 leading-relaxed mb-12">
                        <p className="mb-4">I am a Project Associate at CSIR-IGIB in New Delhi, where I work with <a href="https://www.igib.res.in/profile/dr-lipi-thukral" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Dr. Lipi Thukral</a>. My current research focuses on protein language models (PLMs), graph neural networks (GNNs), and AI for biology.</p>
                        <p className="mb-4">I have been fortunate to work with amazing mentors across different institutions. In 2025, I worked at Secure Meters Limited with Rahul Mathur on network security. In summer 2024, I worked with <a href="https://jyothivedurada.github.io/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Jyothi Vedurada</a> at IIT Hyderabad on API misuse prediction, and with <a href="https://iitp.irins.org/profile/62448" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Jimson Mathew</a> at IIT Patna on automated catalogue creation using computer vision. In summer 2023, I was part of the VL2G team at IIT Jodhpur, led by <a href="https://anandmishra22.github.io/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Anand Mishra</a>, where I developed a scene-text annotation tool for Indian languages.</p>
                        <p className="mb-4">My research interests lie in deep learning, natural language processing, and large language models. I am particularly interested in building AI applications across domains, bridging research with real-world impact.</p>
                    </div>
                </div>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-6 text-gray-900">
                        <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Education</a>
                    </h2>
                    <div className="education">
                        <div className="space-y-4">
                            {member.education.map((edu, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <img 
                                        src={edu.logo} 
                                        alt={edu.institution}
                                        className="w-16 h-16 rounded object-cover flex-shrink-0"
                                        onError={(e) => {
                                            e.target.src = 'https://via.placeholder.com/60x60?text=University';
                                        }}
                                    />
                                    <div className="flex-1">
                                        <h4 className="font-semibold text-lg text-gray-900">{edu.institution}</h4>
                                        <p className="text-gray-700">{edu.location}</p>
                                        <p className="text-gray-600 text-sm">{edu.date}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-6 text-gray-900">
                        <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Experience</a>
                    </h2>
                    <div className="experience">
                        <div className="space-y-4">
                            {member.experience.map((exp, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <img 
                                        src={exp.logo} 
                                        alt={exp.company}
                                        className="w-16 h-16 rounded object-cover flex-shrink-0"
                                        onError={(e) => {
                                            e.target.src = 'https://via.placeholder.com/60x60?text=Company';
                                        }}
                                    />
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h4 className="font-semibold text-lg text-gray-900">{exp.position}</h4>
                                                <p className="text-gray-700">{exp.company}</p>
                                                <p className="text-gray-600 text-sm">{exp.location}</p>
                                            </div>
                                            <p className="text-gray-600 text-sm font-medium">{exp.date}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-6 text-gray-900">
                        <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Selected Publications</a>
                    </h2>
                    <div className="Publications">
                        <ol className="bibliography list-decimal list-inside space-y-6">
                            <li>
                                <div className="row">
                                    <div className="col col-sm-2 abbr">
                                        <abbr className="badge rounded w-100 bg-blue-100 text-blue-800 px-2 py-1 text-xs">
                                            AI & Biology
                                        </abbr>
                                    </div>
                                    <div className="col-sm-8">
                                        <div className="title font-semibold text-lg mb-1">Protein Language Models for Structural Prediction</div>
                                        <div className="author text-gray-700 mb-1">
                                            <em>{member.name}</em>, et al.
                                        </div>
                                        <div className="periodical text-gray-600 text-sm mb-3">
                                            <em>Computational Biology Review</em>, 2024
                                        </div>
                                        <div className="links flex flex-wrap gap-2 mb-3">
                                            <a className="abstract btn btn-sm z-depth-0 bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-1 rounded text-sm" role="button">Abs</a>
                                            <a href="#" className="btn btn-sm z-depth-0 bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-1 rounded text-sm" role="button">DOI</a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div className="col col-sm-2 abbr">
                                        <abbr className="badge rounded w-100 bg-blue-100 text-blue-800 px-2 py-1 text-xs">
                                            Computer Vision
                                        </abbr>
                                    </div>
                                    <div className="col-sm-8">
                                        <div className="title font-semibold text-lg mb-1">Scene Text Annotation for Indian Languages</div>
                                        <div className="author text-gray-700 mb-1">
                                            <em>{member.name}</em>, et al.
                                        </div>
                                        <div className="periodical text-gray-600 text-sm mb-3">
                                            <em>International Conference on ML</em>, 2023
                                        </div>
                                        <div className="links flex flex-wrap gap-2 mb-3">
                                            <a className="abstract btn btn-sm z-depth-0 bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-1 rounded text-sm" role="button">Abs</a>
                                            <a href="#" className="btn btn-sm z-depth-0 bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-1 rounded text-sm" role="button">DOI</a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ol>
                    </div>
                </section>

                <section className="text-center">
                    <div className="contact-icons flex justify-center space-x-6 mb-6">
                        <a href="#" title="Email" className="text-gray-600 hover:text-blue-600 transition-colors text-2xl">
                            <span>📧</span>
                        </a>
                        <a href="#" title="LinkedIn" className="text-gray-600 hover:text-blue-600 transition-colors text-2xl">
                            <span>in</span>
                        </a>
                        <a href="#" title="Scholar" className="text-gray-600 hover:text-blue-600 transition-colors text-2xl">
                            <span>📚</span>
                        </a>
                    </div>
                </section>
            </div>

            <footer className="fixed-bottom border-t border-gray-200 py-8 mt-16">
                <div className="container mt-0 text-center text-gray-500 text-sm">
                    © Copyright {new Date().getFullYear()} {member.name}. Powered by React with al-folio inspired theme.
                </div>
            </footer>
        </div>
    );
};

export default Hitesh;