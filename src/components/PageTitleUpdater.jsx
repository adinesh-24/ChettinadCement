import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PageTitleUpdater = () => {
    const location = useLocation();

    useEffect(() => {
        const path = location.pathname;
        let title = 'Chettinad Cement';

        switch (path) {
            case '/':
                title = 'Home - Chettinad Cement';
                break;
            case '/vision-mission':
                title = 'Vision & Mission - Chettinad Cement';
                break;
            case '/plant/tamil-nadu':
                title = 'Tamil Nadu Plant - Chettinad Cement';
                break;
            case '/plant/andhra-pradesh':
                title = 'Andhra Pradesh Plant - Chettinad Cement';
                break;
            case '/plant/karnataka':
                title = 'Karnataka Plant - Chettinad Cement';
                break;
            case '/plant/maharashtra':
                title = 'Maharashtra Plant - Chettinad Cement';
                break;
            case '/plant/telangana':
                title = 'Telangana Plant - Chettinad Cement';
                break;
            case '/blogs':
                title = 'Blogs - Chettinad Cement';
                break;
            case '/getintouch':
                title = 'Get In Touch - Chettinad Cement';
                break;
            case '/products':
            case '/maxcrete-premium-ppc':
                title = 'Maxcrete Premium PPC - Chettinad Cement';
                break;
            case '/super-grade-ppc':
                title = 'Super Grade PPC - Chettinad Cement';
                break;
            case '/hollow-block-cement':
                title = 'Hollow Block Cement - Chettinad Cement';
                break;
            case '/composite-cement':
                title = 'Composite Cement - Chettinad Cement';
                break;
            case '/opc-53-grade':
                title = 'OPC 53 Grade - Chettinad Cement';
                break;
            case '/opc-43-grade':
                title = 'OPC 43 Grade - Chettinad Cement';
                break;
            case '/classic-slag-cement':
                title = 'Classic Slag Cement - Chettinad Cement';
                break;
            case '/resources':
                title = 'Resources - Chettinad Cement';
                break;
            case '/services':
                title = 'Services - Chettinad Cement';
                break;
            case '/tech-mobile-van':
                title = 'Tech Mobile Van - Chettinad Cement';
                break;
            default:
                title = 'Chettinad Cement';
        }

        document.title = title;
    }, [location]);

    return null;
};

export default PageTitleUpdater;
