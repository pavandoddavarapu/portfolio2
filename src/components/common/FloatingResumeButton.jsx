import { Download } from 'lucide-react';
import MagneticButton from './MagneticButton';

const FloatingResumeButton = () => {
    return (
        <div className="fixed bottom-8 right-8 z-[100]">
            <MagneticButton href="/resume.pdf">
                <div className="group relative flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 hover:bg-blue-500 text-white shadow-2xl hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all duration-300">
                    <Download size={24} className="group-hover:-translate-y-1 group-hover:scale-110 transition-transform duration-300" />

                    {/* Tooltip */}
                    <div className="absolute right-full top-1/2 -translate-y-1/2 mr-4 px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-black font-bold text-sm rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 group-hover:-translate-x-2 transition-all duration-300 whitespace-nowrap shadow-xl">
                        Download CV
                        <div className="absolute left-full top-1/2 -translate-y-1/2 -ml-1 border-4 border-transparent border-l-gray-900 dark:border-l-white"></div>
                    </div>
                </div>
            </MagneticButton>
        </div>
    );
};

export default FloatingResumeButton;
