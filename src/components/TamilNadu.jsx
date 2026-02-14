import React from 'react';
import PlantPageLayout from './PlantPageLayout';

// Puliyur Images
import puliyur1 from '../assets/plants/tamilnadu/puliyur-1.jpg';
import puliyur2 from '../assets/plants/tamilnadu/puliyur-2.jpg';
import puliyur3 from '../assets/plants/tamilnadu/puliyur-3.jpg';

// Karikkali Images
import karikkali1 from '../assets/plants/tamilnadu/karikkali-1.jpg';
import karikkali2 from '../assets/plants/tamilnadu/karikkali-2.jpg';
import karikkali3 from '../assets/plants/tamilnadu/karikkali-3.jpg';

// Ariyalur Images
import ariyalur1 from '../assets/plants/tamilnadu/ariyalur-1.jpg';
import ariyalur2 from '../assets/plants/tamilnadu/ariyalur-2.jpg';
import ariyalur4 from '../assets/plants/tamilnadu/ariyalur-4.jpg';

export default function TamilNadu() {
    const plants = [
        {
            title: "Puliyur Plant - Tamil Nadu",
            description: "The company started with 1.10 MTPA Cement manufacturing plant in Puliyur, Karur District, Tamil Nadu. The cement production capacity increased to 1.37 MTPA in 2009–10 as a result of modernizing the manufacturing facility and installing an additional grinding unit.",
            images: [puliyur1, puliyur2, puliyur3]
        },
        {
            title: "Karikkali Plant",
            description: "The business then built a 0.9 MTPA cement plant in Karikkali Village, Dindigul District, Tamil Nadu, in 2001. In 2008, it added a second cement grinding unit to raise the plant’s capacity to 1.37 MTPA. In 2010–11, a second line with a 1.80 MTPA capacity was put into service, now in 2024 bringing the total capacity to 3.50 MTPA.",
            images: [karikkali1, karikkali2, karikkali3]
        },
        {
            title: "Ariyalur Plant",
            description: "With a total capacity of 3.50 MTPA for cement production, we installed cement plants in Keezhapalur Village, Ariyalur District, during the years 2008–09 and 2009–10.",
            images: [ariyalur1, ariyalur2, ariyalur4]
        }
    ];

    return (
        <PlantPageLayout
            stateName="Tamil Nadu"
            plants={plants}
            headImage="https://www.chettinadcement.com/wp-content/uploads/2024/08/tamilnadu-3.webp"
        />
    );
}
