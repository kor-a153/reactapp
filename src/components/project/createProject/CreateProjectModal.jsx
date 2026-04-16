import { useState } from 'react';
import CreateProjectStep1 from './CreateProjectStep1';
import CreateProjectStep2AI from './CreateProjectStep2AI';
import CreateProjectStep2Manual from './CreateProjectStep2Manual';
import CreateProjectStep3Checklist from './CreateProjectStep3Checklist';

const CreateProjectModal = ({ onClose, onComplete }) => {
    const [step, setStep] = useState('step1');
    const [mode, setMode] = useState('');
    const [projectData, setProjectData] = useState({});

    const handleStep1Next = (selected) => {
        setMode(selected);
        setStep(selected === 'ai' ? 'step2ai' : 'step2manual');
    };

    const handleStep2AINext = (projectName) => {
        setProjectData({ ...projectData, projectName });
        setStep('step3');
    };

    const handleStep2ManualNext = (form) => {
        setProjectData({ ...projectData, ...form });
        setStep('step3');
    };

    const handleComplete = (checklist) => {
        onComplete({ ...projectData, checklist, mode });
    };

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
            <div style={{ background: '#fff', borderRadius: '12px', padding: '32px', width: '400px', position: 'relative' }}>
                {step === 'step1' && (
                    <CreateProjectStep1 onNext={handleStep1Next} onClose={onClose} />
                )}
                {step === 'step2ai' && (
                    <CreateProjectStep2AI onNext={handleStep2AINext} onClose={onClose} />
                )}
                {step === 'step2manual' && (
                    <CreateProjectStep2Manual onNext={handleStep2ManualNext} onClose={onClose} />
                )}
                {step === 'step3' && (
                    <CreateProjectStep3Checklist onComplete={handleComplete} onClose={onClose} />
                )}
            </div>
        </div>
    );
};

export default CreateProjectModal;
