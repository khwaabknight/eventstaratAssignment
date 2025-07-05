import ControlSection from './common/ControlSection';
import mobileAppsImg from '../assets/images/MobileApps.png';

function MobileApps() {
    return (
        <section className="bg-gradient-to-b from-white via-orange-50 to-white lg:max-h-[500px] lg:p-10 space-y-20 ">
            <div className="w-10/12 mx-auto">
                <ControlSection
                    type="Mobile Apps"
                    title="Event-Day Experience In Your Pocket"
                    description="From lead scanning and push notifications to personalized agendas and floorplan navigation, our white-labeled mobile apps are optimized for organizers, exhibitors, and attendees alike."
                    image={mobileAppsImg}
                    reverse
                />
            </div>
        </section>
    );
}

export default MobileApps;
