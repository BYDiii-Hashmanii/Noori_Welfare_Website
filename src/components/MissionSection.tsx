import React from 'react';
import { ArrowRight, Utensils, HeartPulse, Users, GraduationCap } from 'lucide-react';
import { useAppDispatch } from '../store/StoreContext';
import { setWorkFilter } from '../store/actions';

interface MissionSectionProps {
  onAboutClick: () => void;
  onExploreWork: () => void;
}

export const MissionSection: React.FC<MissionSectionProps> = ({ onAboutClick, onExploreWork }) => {
  const dispatch = useAppDispatch();

  const missionPillars = [
    {
      id: 'food',
      title: 'Food Distribution',
      description: 'Essential ration supplies for vulnerable families.',
      icon: Utensils,
      filter: 'food' as const
    },
    {
      id: 'medical',
      title: 'Free Medical Camps',
      description: 'Specialized eye checkups & free surgeries.',
      icon: HeartPulse,
      filter: 'medical' as const
    },
    {
      id: 'community',
      title: 'Community Support',
      description: 'Emergency relief & standing with the underprivileged.',
      icon: Users,
      filter: 'community' as const
    },
    {
      id: 'education',
      title: 'Education & Care',
      description: 'Orphan schooling, kits & bright futures.',
      icon: GraduationCap,
      filter: 'education' as const
    }
  ];

  const handlePillarClick = (filter: 'food' | 'medical' | 'community' | 'education') => {
    dispatch(setWorkFilter(filter));
    onExploreWork();
  };

  return (
    <section id="about" className="bg-[#F7F8F4] py-10 sm:py-16 lg:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Heading, Subtitle & Action */}
          <div className="lg:col-span-4 space-y-3 sm:space-y-4 text-left">
            <div className="space-y-1.5">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#173B52] tracking-tight">
                Our Mission
              </h2>
              <div className="w-12 sm:w-16 h-1 bg-[#F4D943] rounded-full" />
            </div>

            <p className="text-sm sm:text-base text-[#173B52]/80 font-medium leading-relaxed">
              Making sure that help reaches the people who need it most across Bagh, Azad Kashmir.
            </p>

            <div className="pt-1">
              <button
                onClick={onAboutClick}
                className="inline-flex items-center gap-2 bg-[#173B52] hover:bg-[#168A50] text-white text-xs sm:text-sm font-bold py-2.5 px-5 sm:px-6 rounded-full shadow-xs hover:shadow-sm transition-all duration-200 cursor-pointer"
              >
                <span>About NWF</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: 4 Service Cards with Consistent Height & Spacing */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
              {missionPillars.map((pillar) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={pillar.id}
                    onClick={() => handlePillarClick(pillar.filter)}
                    className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/70 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-200 text-center flex flex-col items-center justify-between cursor-pointer group min-h-[170px] sm:min-h-[210px]"
                  >
                    {/* Consistent Icon Container */}
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-emerald-50 group-hover:bg-[#168A50]/10 flex items-center justify-center mb-3 sm:mb-4 transition-colors">
                      <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-[#168A50] transition-transform group-hover:scale-110" />
                    </div>

                    <div className="space-y-1.5 flex-1 flex flex-col justify-center">
                      <h3 className="text-sm sm:text-base font-bold text-[#173B52] group-hover:text-[#168A50] transition-colors leading-snug">
                        {pillar.title}
                      </h3>
                      <p className="text-xs text-[#173B52]/70 font-normal leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>

                    <div className="mt-3 text-[11px] font-bold text-[#168A50] opacity-90 group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                      <span>View Activities</span>
                      <span>→</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
