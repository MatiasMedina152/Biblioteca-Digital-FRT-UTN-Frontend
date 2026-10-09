import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import '../components/styles-components/btnTop.css'

function BotonVolverArriba() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const controlarScroll = () => {
            setVisible(window.scrollY > 100);
        };

        window.addEventListener('scroll', controlarScroll);

        controlarScroll();

        return () => {
            window.removeEventListener('scroll', controlarScroll);
        };
    }, []);

    const volverArriba = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    if (!visible) {
        return null;
    }

    return (
        <Button
            className="btn-volver-arriba"
            onClick={volverArriba}
            aria-label="Volver al inicio de la página"
            title="Volver arriba"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
            >
                <path d="m18 15-6-6-6 6" />
            </svg>
        </Button>
    );
}

export default BotonVolverArriba;
