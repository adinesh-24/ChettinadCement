import React from 'react';
import PlantPageLayout from './PlantPageLayout';

const Karnataka = () => {
    const plants = [
        {
            title: "Kallur Plant - Karnataka",
            description: "In the academic year 2011–12, Chettinad Cement inaugurated a green field cement manufacturing unit in Kallur Village, Chincholi Taluk, Gulbarga district, with a capacity of 2.00 MTPA.",
            images: [
                "https://www.chettinadcement.com/wp-content/uploads/2024/08/kallur-1-600x400.png",
                "https://www.chettinadcement.com/wp-content/uploads/2024/08/kallur-2-600x400.png",
                "https://www.chettinadcement.com/wp-content/uploads/2024/08/kallur-3-600x400.png"
            ]
        }
    ];

    return (
        <PlantPageLayout
            stateName="Karnataka"
            plants={plants}
            headImage="https://www.chettinadcement.com/wp-content/uploads/2024/08/karnataka-banner.jpg"
        />
    );
};

export default Karnataka;
