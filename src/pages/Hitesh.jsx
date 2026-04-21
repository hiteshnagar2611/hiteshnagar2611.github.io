import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const url = (filePath) => `${import.meta.env.BASE_URL}${filePath.replace(/^\//, '')}`;

const Hitesh = () => {
    const member = {
        name: 'Hitesh Nagar',
        role: 'Project Associate',
        image: url('/images/team/hitesh.jpg'),
        bio: `I am a Project Associate at CSIR-IGIB in New Delhi, where I work with Dr. Lipi Thukral. My current research focuses on protein language models (PLMs), graph neural networks (GNNs), and AI for biology.

I have been fortunate to work with amazing mentors across different institutions. In 2025, I worked at Secure Meters Limited with Rahul Mathur on network security. In summer 2024, I worked with Jythi Veduradha at IIT Hyderabad on API misuse prediction, and with Jimson Mathew at IIT Patna on automated catalogue creation using computer vision. In summer 2023, I was part of the VL2G team at IIT Jodhpur, led by Anand Mishra, where I developed a scene-text annotation tool for Indian languages.

My research interests lie in deep learning, natural language processing, and large language models. I am particularly interested in building AI applications across domains, bridging research with real-world impact.`,
        education: [
            'MBM University, Jodhpur, India (June 2025)'
        ],
        experience: [
            'Secure Meters Limited, Graduate Engineer trainee(Network Security) | Udaipur, RJ July 2025 ‑ Present\n• Managed and secured computer networks by configuring firewalls, switches, and applying cybersecurity best practices to prevent threats and ensure system integrity. Managed around 50+ tickets every month.',
            'Secure Meters Limited, Software Engineering Intern | Udaipur, RJ Jan 2025 ‑ Feb 2025\n• Designed and implemented an Employee Benevolent Software System, transitioning the company\'s process from offline (paper-based) to a fully online platform, enhancing efficiency by 70%, accessibility, and record management.',
            'Indian Institute of Technology Hyderabad, Summer Intern | Sangareedy, TS June 2024 ‑ July 2024\n• Built and optimized a dataset of 15K+ code samples for API misuse prediction, enhancing model training efficiency and accuracy in software reliability tasks.',
            'Indian Institute of Technology Patna, Computer Vision Intern | Remote March 2024 ‑ Apr 2024\n• Reduced recognition errors by 26% and improved text recognition accuracy by 18% in a supermarket product identification pipeline.\n• Implemented advanced image processing techniques including skeletonization, binary conversion, and ABINET based on ASTER for robust recognition across a self made labeled dataset of 250,000+ images spanning 500+ brand classes.',
            'Indian Institute of Technology Goa, NSM Intern | Remote Jan 2024 ‑ Feb 2024\n• Developed and optimized C++ code for CFD Solver , ensuring high performance on various GPU architectures using Kokkos.\n• Converted CUDA/OpenACC code to Kokkos, enabling performance portability across NVIDIA, AMD, and Intel GPUs with CUDA and OpenMP.',
            'Indian Institute of Technology Jodhpur, Project Intern | Jodhpur, RJ June 2023 ‑ July 2023\n• Developed and deployed a desktop application, enabling seamless text annotation in 10+ Indian regional languages for computer vision tasks; enhanced annotation process and accuracy by 40%.',
            'Oil and Natural Gas Corporation Dehradun, Summer Trainee | Remote June 2023 ‑ July 2023\n• Led the development and implementation of machine learning models for facies identification from well logs, increasing accuracy by 30% and efficiency by 40% in geological analysis for oil discovery.'
        ],
        awards: ['Research Assistantship'],
        publications: 2,
        joined: '2024'
    };

    return (
        <div className="min-h-screen" style={{ backgroundColor: '#ffffff', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
            <header className="py-12 px-8">
                <div className="max-w-4xl mx-auto">
                    <Link to="/team" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 text-sm">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Team
                    </Link>
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
                        {member.bio.split('\n').map((paragraph, index) => (
                            <p key={index} className="mb-4">{paragraph}</p>
                        ))}
                    </div>
                </div>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-6 text-gray-900">
                        <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Education</a>
                    </h2>
                    <div className="education">
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            {member.education.map((edu, index) => (
                                <li key={index} className="text-base">{edu}</li>
                            ))}
                        </ul>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-6 text-gray-900">
                        <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Experience</a>
                    </h2>
                    <div className="experience">
                        <div className="space-y-6">
                            {member.experience.map((exp, index) => {
                                const lines = exp.split('\n');
                                const title = lines[0];
                                const bullets = lines.slice(1);
                                return (
                                    <div key={index} className="mb-4">
                                        <h4 className="font-semibold text-lg text-gray-900 mb-2">{title}</h4>
                                        <ul className="list-disc list-inside ml-4 space-y-1 text-gray-700">
                                            {bullets.map((bullet, i) => (
                                                <li key={i} className="text-base leading-relaxed">{bullet}</li>
                                            ))}
                                        </ul>
                                    </div>
                                );
                            })}
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