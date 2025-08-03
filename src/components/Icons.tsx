const ChatbotIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.83 14.55C16.94 14.81 17 15.1 17 15.41C17 16.83 15.83 18 14.41 18C14.12 18 13.83 17.94 13.57 17.83C13.19 18.54 12.44 19 11.5 19C10.56 19 9.81 18.54 9.43 17.83C9.17 17.94 8.88 18 8.59 18C7.17 18 6 16.83 6 15.41C6 15.12 6.06 14.83 6.17 14.57C5.46 14.19 5 13.44 5 12.5C5 11.56 5.46 10.81 6.17 10.43C6.06 10.17 6 9.88 6 9.59C6 8.17 7.17 7 8.59 7C8.88 7 9.17 7.06 9.43 7.17C9.81 6.46 10.56 6 11.5 6C12.44 6 13.19 6.46 13.57 7.17C13.83 7.06 14.12 7 14.41 7C15.83 7 17 8.17 17 9.59C17 9.88 16.94 10.17 16.83 10.43C17.54 10.81 18 11.56 18 12.5C18 13.44 17.54 14.19 16.83 14.55Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M11.5 15C12.8807 15 14 13.8807 14 12.5C14 11.1193 12.8807 10 11.5 10C10.1193 10 9 11.1193 9 12.5C9 13.8807 10.1193 15 11.5 15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const SendIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.51002 4.23001L18.07 8.51001C21.91 10.43 21.91 13.57 18.07 15.49L9.51002 19.77C3.75002 22.65 1.35002 20.25 4.23002 14.49L5.16002 12.63C5.38002 12.19 5.38002 11.81 5.16002 11.37L4.23002 9.51001C1.35002 3.75001 3.75002 1.35001 9.51002 4.23001Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5.49988 12H11.9999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const CloseIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const CopyIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 12.9V17.1C16 20.6 14.6 22 11.1 22H6.9C3.4 22 2 20.6 2 17.1V12.9C2 9.4 3.4 8 6.9 8H11.1C14.6 8 16 9.4 16 12.9Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22 6.9V11.1C22 14.6 20.6 16 17.1 16H16V12.9C16 9.4 14.6 8 11.1 8H8V6.9C8 3.4 9.4 2 12.9 2H17.1C20.6 2 22 3.4 22 6.9Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export { ChatbotIcon, SendIcon, CloseIcon, CopyIcon };