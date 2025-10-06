const ChatbotIcon = ({ className }: { className?: string }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0,0,256,256">
        <g fill="#FFFFFF" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: "normal"}}>
            <g transform="scale(5.12,5.12)">
                <path d="M25,4.5c-9.796,0 -19.05603,7.48597 -21.08203,17.04297c-0.006,0.029 0.00205,0.05694 -0.00195,0.08594c-2.354,1.605 -3.95898,4.75409 -3.95898,8.37109c0,5.238 3.364,9.5 7.5,9.5c0.328,0 0.63431,-0.16069 0.82031,-0.42969c0.187,-0.27 0.22923,-0.61387 0.11523,-0.92187c-0.015,-0.038 -1.4375,-3.90444 -1.4375,-8.64844c0,-4.994 1.35409,-7.47781 1.37109,-7.50781c0.175,-0.309 0.17214,-0.68714 -0.00586,-0.99414c-0.177,-0.309 -0.50728,-0.49805 -0.86328,-0.49805c-0.422,0 -0.83428,0.05463 -1.23828,0.14063c2.368,-8.027 10.35125,-14.14062 18.78125,-14.14062c7.992,0 15.68864,5.54417 18.43164,13.07617c-0.298,-0.046 -0.6002,-0.07617 -0.9082,-0.07617c-0.354,0 -0.68233,0.18909 -0.86133,0.49609c-0.18,0.306 -0.18081,0.68709 -0.00781,0.99609c0.014,0.024 1.36914,2.50781 1.36914,7.50781c0,3.94 -0.97836,7.26764 -1.31836,8.30664c-1.147,0.934 -2.88973,2.22766 -4.92773,3.34766c-0.761,-0.849 -1.93795,-1.28286 -3.12695,-1.00586l-1.7832,0.41211c-0.843,0.193 -1.55858,0.70155 -2.01758,1.43555c-0.458,0.732 -0.60416,1.60236 -0.41016,2.44336c0.344,1.496 1.6803,2.50977 3.1543,2.50977c0.239,0 0.48061,-0.02603 0.72461,-0.08203l1.78516,-0.41016c0.842,-0.193 1.55763,-0.7045 2.01563,-1.4375c0.384,-0.613 0.53484,-1.31934 0.46484,-2.02734c2.145,-1.162 3.98647,-2.50877 5.23047,-3.50977c4,-0.196 7.20898,-4.36842 7.20898,-9.48242c0,-3.763 -1.739,-7.01083 -4.25,-8.54883c-0.004,-0.075 0.00442,-0.14961 -0.01758,-0.22461c-2.603,-9.113 -11.33286,-15.72656 -20.75586,-15.72656zM12,19c-0.553,0 -1,0.447 -1,1v12c0,0.553 0.447,1 1,1h16.04492c-0.504,1.057 -1.30134,2.48237 -1.90234,3.48438c-0.201,0.335 -0.18775,0.75612 0.03125,1.07813c0.187,0.277 0.49917,0.4375 0.82617,0.4375c0.055,0 0.10906,-0.00467 0.16406,-0.01367c6.187,-1.031 11.24794,-5.03508 11.46094,-5.20508c0.237,-0.19 0.375,-0.47725 0.375,-0.78125v-12c0,-0.553 -0.447,-1 -1,-1zM18.5,23c1.402,0 2.5,1.317 2.5,3c0,1.683 -1.098,3 -2.5,3c-1.402,0 -2.5,-1.317 -2.5,-3c0,-1.683 1.098,-3 2.5,-3zM31.5,23c1.402,0 2.5,1.317 2.5,3c0,1.683 -1.098,3 -2.5,3c-1.402,0 -2.5,-1.317 -2.5,-3c0,-1.683 1.098,-3 2.5,-3z"></path>
            </g>
        </g>
    </svg>
);
// A sleek "AI Sparkle" icon for the in-chat avatar
const BotAvatarIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2v4M12 20v2M22 12h-4M6 12H2M4.929 4.929l2.828 2.828M16.243 16.243l2.828 2.828M19.071 4.929l-2.828 2.828M7.757 16.243l-2.828 2.828" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
    </svg>
);

const SendIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.51002 4.23001L18.07 8.51001C21.91 10.43 21.91 13.57 18.07 15.49L9.51002 19.77C3.75002 22.65 1.35002 20.25 4.23002 14.49L5.16002 12.63C5.38002 12.19 5.38002 11.81 5.16002 11.37L4.23002 9.51001C1.35002 3.75001 3.75002 1.35001 9.51002 4.23001Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5.49988 12H11.9999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);


// A minimalist 'X' icon
const CloseIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

// A cleaner, more standard 'copy' icon
const CopyIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5 15H4C2.89543 15 2 14.1046 2 13V4C2 2.89543 2.89543 2 4 2H13C14.1046 2 15 2.89543 15 4V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);


export { ChatbotIcon, BotAvatarIcon, SendIcon, CloseIcon, CopyIcon };