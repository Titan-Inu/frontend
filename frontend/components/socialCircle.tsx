import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


interface socialCircleProps {
    icon: any;
}

export default function socialCircle( { icon }: socialCircleProps ) {
    return (
        <button className='flex items-center justify-center text-xl sm:text-2xl h-8 w-8 sm:h-12 sm:w-12 rounded-full bg-white text-orange-500'>
            <FontAwesomeIcon icon={icon}  />
        </button>
        
    )
}
