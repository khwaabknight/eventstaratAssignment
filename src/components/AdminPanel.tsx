import React from 'react';
import ControlSection from './common/ControlSection';
import adminPanelImg from '../assets/images/AdminPanel.png';

function AdminPanel() {
    return (
        <section className='bg-gradient-to-b from-white via-orange-50 to-white lg:max-h-[500px] p-10 mt-10 space-y-20 '>
          <div className='lg:w-10/12 mx-auto'>
            <ControlSection
                type="Admin Panel"
                title="Your Control Center"
                description="Manage user roles, registration flows, content schedules, comms, booth zones, analytics, and more — all from one powerful dashboard. Granular access permissions included."
                image={adminPanelImg}
            />
          </div>
        </section>
    );
}

export default AdminPanel;
