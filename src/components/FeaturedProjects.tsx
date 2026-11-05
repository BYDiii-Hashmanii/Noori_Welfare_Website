import React from 'react';
import { Heart, Users } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../store/StoreContext';
import { selectProjectAppeals } from '../store/selectors';
import { openDonationModal } from '../store/actions';
import { ProjectAppeal } from '../store/state';

export const FeaturedProjects: React.FC = () => {
  const dispatch = useAppDispatch();
  const projects = useAppSelector(selectProjectAppeals);

  const handleDonateClick = (project: ProjectAppeal) => {
    dispatch(
      openDonationModal({
        cause: project.title,
        amount: project.unitCost
      })
    );
  };

  const formatPKR = (amount: number) => {
    return new Intl.NumberFormat('en-PK', {
      style: 'currency',
      currency: 'PKR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <section id="donate-section" className="py-10 sm:py-16 lg:py-20 bg-[#F7F8F4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="w-8 sm:w-12 h-0.5 bg-[#F4D943] rounded-full" />
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#168A50]">
              Urgent Appeals
            </span>
            <span className="w-8 sm:w-12 h-0.5 bg-[#F4D943] rounded-full" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#173B52] tracking-tight">
            Directly Impact a Life Today
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[#173B52]/80 font-medium mt-1.5">
            Select an ongoing appeal to sponsor food, surgery, or schooling for a vulnerable family.
          </p>
        </div>

        {/* 4 Appeal Cards - Responsive 1-col mobile, 2-col tablet, 4-col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {projects.map((project) => {
            const percent = Math.min(100, Math.round((project.raisedAmount / project.targetAmount) * 100));

            return (
              <div
                key={project.id}
                className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/80 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                {/* Photo Frame with Strict Aspect Ratio */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Unit Cost Pill */}
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-xs text-[#173B52] text-xs font-bold px-3 py-1 rounded-full shadow-xs">
                    {formatPKR(project.unitCost)}
                  </div>

                  <div className="absolute bottom-2.5 left-3 right-3 text-white">
                    <span className="text-[11px] font-semibold text-[#F4D943] uppercase tracking-wider">
                      {project.unitLabel}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3.5 text-left">
                  <div className="space-y-1">
                    <h3 className="text-sm sm:text-base font-bold text-[#173B52] group-hover:text-[#168A50] transition-colors leading-snug line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-xs text-[#173B52]/70 font-normal line-clamp-2 leading-relaxed">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Funding Progress Bar */}
                  <div className="space-y-1.5 bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <div className="flex justify-between items-center text-xs font-bold">
                      <span className="text-[#168A50]">{percent}% Funded</span>
                      <span className="text-slate-500 font-medium text-[11px]">
                        Target: {formatPKR(project.targetAmount)}
                      </span>
                    </div>

                    {/* Bar */}
                    <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#168A50] to-[#F4D943] rounded-full transition-all duration-500"
                        style={{ width: `${percent}%` }}
                      />
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-slate-500 font-medium pt-0.5">
                      <span className="flex items-center gap-1">
                        <Users className="w-3 h-3 text-[#168A50]" />
                        <span>{project.donorsCount} Donors</span>
                      </span>
                      <span className="font-semibold text-[#173B52]">
                        {formatPKR(project.raisedAmount)}
                      </span>
                    </div>
                  </div>

                  {/* Action CTA Button */}
                  <button
                    onClick={() => handleDonateClick(project)}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#173B52] hover:bg-[#168A50] text-white text-xs sm:text-sm font-bold py-2.5 sm:py-3 px-4 rounded-full transition-all shadow-xs hover:shadow-sm cursor-pointer active:scale-98"
                  >
                    <Heart className="w-3.5 h-3.5 fill-white" />
                    <span>Sponsor Now</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
