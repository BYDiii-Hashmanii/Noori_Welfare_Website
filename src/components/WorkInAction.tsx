import React from 'react';
import { Utensils, Stethoscope, Users, GraduationCap, MapPin, Eye, ArrowRight } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../store/StoreContext';
import { selectFilteredCampaigns, selectActiveFilter } from '../store/selectors';
import { setWorkFilter, openCampaignModal } from '../store/actions';
import { Campaign } from '../store/state';

export const WorkInAction: React.FC = () => {
  const dispatch = useAppDispatch();
  const campaigns = useAppSelector(selectFilteredCampaigns);
  const activeFilter = useAppSelector(selectActiveFilter);

  const filterTabs = [
    { id: 'all', label: 'All Activities' },
    { id: 'food', label: 'Food Distribution' },
    { id: 'medical', label: 'Medical Camps' },
    { id: 'community', label: 'Community Support' },
    { id: 'qurbani', label: 'Qurbani Drives' }
  ] as const;

  const getPillarIcon = (category: string) => {
    switch (category) {
      case 'food':
        return <Utensils className="w-3.5 h-3.5 text-white" />;
      case 'medical':
        return <Stethoscope className="w-3.5 h-3.5 text-white" />;
      case 'community':
        return <Users className="w-3.5 h-3.5 text-white" />;
      case 'education':
        return <GraduationCap className="w-3.5 h-3.5 text-white" />;
      default:
        return <Utensils className="w-3.5 h-3.5 text-white" />;
    }
  };

  const handleCardClick = (campaign: Campaign) => {
    dispatch(openCampaignModal(campaign));
  };

  return (
    <section id="projects" className="py-10 sm:py-16 lg:py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-10">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="w-8 sm:w-16 h-0.5 bg-[#F4D943] rounded-full" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#173B52] tracking-tight">
              Our Work in Action
            </h2>
            <span className="w-8 sm:w-16 h-0.5 bg-[#F4D943] rounded-full" />
          </div>
          <p className="text-xs sm:text-sm md:text-base text-[#173B52]/80 font-medium">
            Real efforts. Real impact across Bagh, Azad Jammu & Kashmir.
          </p>

          {/* Interactive Filter Tabs - Mobile horizontal scroll with touch support */}
          <div className="flex items-center justify-start sm:justify-center overflow-x-auto no-scrollbar gap-2 mt-4 sm:mt-6 pb-2 sm:pb-0 px-1">
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => dispatch(setWorkFilter(tab.id))}
                  className={`text-xs sm:text-sm font-semibold px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full transition-all duration-200 whitespace-nowrap cursor-pointer shrink-0 ${
                    isActive
                      ? 'bg-[#168A50] text-white shadow-xs'
                      : 'bg-slate-100 text-[#173B52]/80 hover:bg-slate-200 hover:text-[#173B52]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Consistent Card Grid - Mobile 1-col or 2-col, Desktop 4-col */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {campaigns.map((campaign) => (
            <div
              key={campaign.id}
              onClick={() => handleCardClick(campaign)}
              className="group bg-white rounded-2xl sm:rounded-3xl border border-slate-200/80 shadow-xs hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col overflow-hidden"
            >
              {/* Photo Frame with Aspect Ratio */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900">
                <img
                  src={campaign.image}
                  alt={campaign.title}
                  className={`w-full h-full object-cover ${campaign.objectPosition || 'object-center'} transition-transform duration-500 group-hover:scale-105`}
                  loading="lazy"
                />

                {/* Subtle scrim for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

                {/* Location Chip */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-white text-[11px] font-semibold">
                  <span className="flex items-center gap-1 bg-black/50 backdrop-blur-xs px-2.5 py-0.5 rounded-full">
                    <MapPin className="w-3 h-3 text-[#F4D943]" />
                    <span className="truncate max-w-[140px]">{campaign.location}</span>
                  </span>
                  <span className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Eye className="w-3 h-3 text-white" />
                  </span>
                </div>

              </div>

              {/* Card Body - Balanced Typography & Spacing */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3 text-left">
                <div className="space-y-1">
                  <h3 className="text-sm sm:text-base font-bold text-[#173B52] group-hover:text-[#168A50] transition-colors leading-snug line-clamp-1">
                    {campaign.title}
                  </h3>
                  <p className="text-xs text-[#173B52]/70 font-normal line-clamp-2 leading-relaxed">
                    {campaign.summary}
                  </p>
                </div>

                <div className="pt-2 flex items-center justify-between text-[11px] font-bold text-[#168A50] border-t border-slate-100">
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
