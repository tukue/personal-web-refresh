import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Education = () => {
  const educationItems = [
    {
      degree: 'Master of Science in Information Communication Technology(ICT) innovation',
      institution: 'KTH Royal Institute of Technology',
      location: 'Stockholm, Sweden',
      period: '2013 - 2014',
      focusAreas: [
        'Communication network Architecture',
        'Communication System Development and Integration',
        'Communication systems',
        'Wireless network modeling and system design',
        'Communication System Design and Development, a four month practical joint project with Acreo, Karolinska Hospital and KTH',
        'Research Methodology and Scientific writing',
        'Thesis project within Innovation and Entrepreneurship',
        'Degree Project in communications Systems and Networks at wirelss@Kth lab'
      ],
      thesis: 'Energy efficient traffic adaptive base station operation with cell DTX for heterogeneous mobile networks.'
    },
    {
      degree: 'M.Sc in Computer Networks',
      institution: 'University Pierre et Marie Curie',
      location: 'Paris, France',
      period: '2012- 2013',
      focusAreas: [
        'Network architecture (computer networks)',
        'Network security',
        'Wireless networks and mobile communication',
        'Telecom networks',
        'Digital transmission system',
        'Digital signal processing',
        'Next generation Internet',
        'Modeling and simulation of computer and communication systems',
        'Innovation concepts and business model design practices'
      ]
    },
    {
      degree: 'Bachelor of Science in Electronics and Communication Engineering',
      institution: 'Mekelle Institute of Technology',
      location: 'Mekelle, Ethiopia',
      period: '2005 - 2009',
      focusAreas: [
        'Computer Programming and Algorithms',
        'Software Development Methodologies',
        'Database Management Systems',
        'Computer Networks and Security',
        'Wireless Communication Systems',
        'Signal Processing and Digital Communication',
        'Digital communication',
        'Digital signal processing'
      ]
    },
    {
      degree: 'Applied Data Science Professional Certificate',
      institution: 'Coursera',
      location: 'Online',
      period: '2022',
      focusAreas: [
        'Data Analysis with Python',
        'Data Visualization with Python',
        'Python for Data Science and AI and Development',
        'Python project for Data science',
        'Applied Data Science Capstone'
      ]
    }
  ];

  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12 tracking-tight sm:text-4xl">Education</h2>
        
        <div className="space-y-8">
          {educationItems.map((item, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2">{item.degree}</h3>
                <div className="flex flex-col md:flex-row md:justify-between mb-4">
                  <div>
                    <p className="text-lg font-medium">{item.institution}</p>
                    <p className="text-muted-foreground">{item.location}</p>
                  </div>
                  <p className="text-muted-foreground">{item.period}</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-2">
                    {item.thesis ? 'Key Focus Areas:' : 'Core Studies:'}
                  </h4>
                  <ul className="list-disc pl-5 space-y-1 mb-4">
                    {item.focusAreas.map((area, areaIndex) => (
                      <li key={areaIndex}>{area}</li>
                    ))}
                  </ul>
                  
                  {item.thesis && (
                    <>
                      <h4 className="text-lg font-semibold mb-2">Master thesis:</h4>
                      <p>{item.thesis}</p>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;