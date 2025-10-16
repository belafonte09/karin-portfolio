import { ArrowLeft } from 'lucide-react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import RuleCreationPrototype from '@/components/prototype/RuleCreationPrototype';
import DunningLetterBeforeInteractive from '@/components/prototype/DunningLetterBeforeInteractive';
import DunningLetterAfterInteractive from '@/components/prototype/DunningLetterAfterInteractive';
import DunningLetterVisual from '@/components/prototype/DunningLetterVisual';
import SimpleArrowPrompt from '@/components/SimpleArrowPrompt';

interface ProjectDetailProps {
  projects: {
    [key: string]: Array<{
      name: string;
      date: string;
      problem: string;
      solution?: string;
      impact: Array<{ metric: string; before: string; after: string; description?: string; }>;
      videoUrl?: string;
      hasInteractivePrototype?: boolean;
      hasAfterPrototype?: boolean;
      problems?: string[];
      solutions?: string[] | {
        title: string;
        figmaImprovements: {
          title: string;
          description: string;
          highlight: string;
        };
        handoverPractices: {
          title: string;
          rules: string[];
        };
        processSteps: {
          title: string;
          note: string;
          steps: string[];
        };
        additionalAgreements: string[];
      };
      challenges?: string[];
      marketResearch?: string;
      designSprint?: {
        title: string;
        description: string;
        outcomes: string[];
      };
      testingResults?: {
        title: string;
        description: string;
        usabilityIssues: Array<{
          topic: string;
          insight: string;
          action: string;
        }>;
        outOfScope: string;
      };
      prototypeVideoUrl?: string;
      visuals?: Array<{
        type: string;
        title: string;
        url: string;
      }>;
      relatedProjects?: Array<{
        name: string;
        company: string;
      }>;
      workshop?: {
        title: string;
        description: string;
        goals: string[];
      };
      outOfScope?: string[];
      learnings?: string[];
      image?: string;
      comingSoon?: boolean;
    }>;
  };
}

const ProjectDetail = ({ projects }: ProjectDetailProps) => {
  const { company, projectName } = useParams();
  const navigate = useNavigate();
  const [showPrototypePrompt, setShowPrototypePrompt] = useState(true);

  const hidePrototypePrompt = () => {
    setShowPrototypePrompt(false);
  };

  // Find the project
  const project = company && projects[company]?.find(p => p.name === decodeURIComponent(projectName || ''));

  if (!project) {
    navigate('/404');
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="px-4 md:px-16 lg:px-24 xl:px-32 pt-8 pb-24">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-riso-fuschia transition-colors duration-300 mb-12">
            <ArrowLeft className="w-8 h-8" />
            Back to Home
          </Link>

          <div className="space-y-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2 font-sora">
                {project.name}
              </h1>
              {project.date && (
                <p className="text-muted-foreground text-lg mb-6">{project.date}</p>
              )}
            </div>

            {project.comingSoon ? (
              <div className="text-center py-20">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Coming soon!</h2>
                <p className="text-muted-foreground">This case study is currently in development. Check back soon for more details!</p>
              </div>
            ) : (
              <div className="space-y-16">
                <div>
                  <h4 className="text-lg font-semibold text-foreground font-sora mb-3">
                    Problem Statement
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                {/* Solution Section */}
                {project.solution && (
                  <div>
                    <h4 className="text-lg font-semibold text-foreground font-sora mb-3">
                      Solution
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                )}

                {/* Challenges Section */}
                {project.challenges && (
                  <div>
                    <h4 className="text-lg font-semibold text-foreground font-sora mb-3">
                      Challenges
                    </h4>
                    <ul className="list-disc space-y-2 text-muted-foreground ml-6">
                      {project.challenges.map((challenge, index) => (
                        <li key={index} className="pl-2">
                          <span className="-ml-2 block">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Workshop Section */}
                {project.workshop && (
                  <div>
                    <h4 className="text-lg font-semibold text-foreground font-sora mb-3">
                      {project.workshop.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed mb-10">
                      {project.workshop.description}
                    </p>
                    <div className="bg-white rounded-lg p-6">
                      <h5 className="font-semibold text-foreground mb-3">Our goals were simple:</h5>
                      <ul className="list-disc space-y-2 text-muted-foreground ml-6">
                        {project.workshop.goals.map((goal, index) => (
                          <li key={index} className="pl-2">
                            <span className="-ml-2 block">{goal}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {/* Market Research Section */}
                {project.marketResearch && (
                  <div>
                    <h4 className="text-lg font-semibold text-foreground font-sora mb-3">
                      Market Research
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.marketResearch}
                    </p>
                  </div>
                )}

                {/* Design Sprint Section */}
                {project.designSprint && (
                  <div>
                    <h4 className="text-lg font-semibold text-foreground font-sora mb-3">
                      {project.designSprint.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed mb-10">
                      {project.designSprint.description}
                    </p>
                    <div className="bg-white rounded-lg p-6">
                      <h5 className="font-semibold text-foreground mb-3">After one day in the room together:</h5>
                      <ul className="list-disc space-y-2 text-muted-foreground ml-6">
                        {project.designSprint.outcomes.map((outcome, index) => (
                          <li key={index} className="pl-2">
                            <span className="-ml-2 block">{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Visuals Section */}
                    {project.name === "How we used AI to simplify Rule Creation" && (
                      <div className="mt-6">
                        <h4 className="text-lg font-semibold text-foreground font-sora mb-3">Visuals</h4>
                        <div className="bg-card rounded-lg p-6">
                          <div className="flex items-center justify-center min-h-[250px]">
                            <img
                              src="/images/visuals/visual ai rule creator.png"
                              alt="AI Rule Creator Visual"
                              className="max-w-full max-h-full object-contain rounded-lg"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Testing and Results Section */}
                {project.testingResults && (
                  <div>
                    <h4 className="text-lg font-semibold text-foreground font-sora mb-3">
                      {project.testingResults.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed mb-10">
                      {project.testingResults.description}
                    </p>
                    <div className="mb-4">
                      <h5 className="font-semibold text-foreground mb-8">Usability Issues:</h5>
                      <div className="overflow-x-auto mb-8">
                        <table className="w-full border border-border">
                          <thead>
                            <tr className="border-b border-border">
                              <th className="text-left py-3 px-4 text-sm font-semibold text-foreground border-r border-border" style={{fontFamily: 'Jost, sans-serif'}}>Topic</th>
                              <th className="text-left py-3 px-4 text-sm font-semibold text-foreground border-r border-border" style={{fontFamily: 'Jost, sans-serif'}}>Insight</th>
                              <th className="text-left py-3 px-4 text-sm font-semibold text-foreground" style={{fontFamily: 'Jost, sans-serif'}}>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {project.testingResults.usabilityIssues.map((issue, index) => (
                              <tr key={index} className="border-b border-border/50">
                                <td className="py-3 px-4 text-sm text-muted-foreground font-normal border-r border-border" style={{fontFamily: 'Jost, sans-serif'}}>{issue.topic}</td>
                                <td className="py-3 px-4 text-sm text-muted-foreground font-normal border-r border-border" style={{fontFamily: 'Jost, sans-serif'}}>{issue.insight}</td>
                                <td className="py-3 px-4 text-sm text-muted-foreground font-normal" style={{fontFamily: 'Jost, sans-serif'}}>{issue.action}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-6">
                      <h5 className="font-semibold text-foreground mb-3">Out of Scope → Next iteration:</h5>
                      <p className="text-muted-foreground">{project.testingResults.outOfScope}</p>
                    </div>
                  </div>
                )}

                {/* Solutions & Improvements Section */}
                {project.solutions && (
                  <div>
                    {/* Handle object-type solutions (complex structure) */}
                    {typeof project.solutions === 'object' && !Array.isArray(project.solutions) && (
                      <>
                        <h4 className="text-lg font-semibold text-foreground font-sora mb-8">
                          {project.solutions.title}
                        </h4>

                        {/* Figma Improvements */}
                        <div className="mb-10">
                          <h5 className="font-semibold text-foreground mb-3">{project.solutions.figmaImprovements.title}</h5>
                          <p className="text-muted-foreground leading-relaxed mb-3">
                            {project.solutions.figmaImprovements.description}
                          </p>
                          <p className="text-muted-foreground font-medium">
                            {project.solutions.figmaImprovements.highlight}
                          </p>
                        </div>

                        {/* Handover Best Practices */}
                        <div className="mb-10">
                          <h5 className="font-semibold text-foreground mb-3">{project.solutions.handoverPractices.title}</h5>
                          <ul className="list-disc space-y-2 text-muted-foreground ml-6">
                            {project.solutions.handoverPractices.rules.map((rule, index) => (
                              <li key={index} className="pl-2">
                                <span className="-ml-2 block">{rule}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Updated Process Steps */}
                        {project.solutions.processSteps && (
                          <div className="mb-10">
                            <h5 className="font-semibold text-foreground mb-3">{project.solutions.processSteps.title}</h5>
                            <p className="text-sm text-muted-foreground mb-4 italic">{project.solutions.processSteps.note}</p>
                            <div className="bg-white rounded-lg p-6">
                              <ol className="list-decimal space-y-3 text-muted-foreground ml-6">
                                {project.solutions.processSteps.steps.map((step, index) => (
                                  <li key={index} className="pl-2">
                                    <span className="-ml-2 block">{step}</span>
                                  </li>
                                ))}
                              </ol>
                            </div>
                          </div>
                        )}

                        {/* Updated Process */}
                        <div className="mb-10">
                          <h5 className="font-semibold text-foreground mb-8">Updated Process</h5>
                        </div>

                        {/* Cross Functional Swimlane Visual */}
                        <div className="my-8 -mx-8 md:-mx-24 lg:-mx-32">
                          <img
                            src="/images/visuals/Cross Functional Swimlane.jpg"
                            alt="Cross Functional Swimlane Process Diagram"
                            className="w-full h-auto rounded-lg shadow-sm"
                          />
                        </div>

                        {/* Additional Agreements */}
                        <div className="mb-10">
                          <h5 className="font-semibold text-foreground mb-3">Additional agreements:</h5>
                          <ul className="list-disc space-y-2 text-muted-foreground ml-6">
                            {project.solutions.additionalAgreements.map((agreement, index) => (
                              <li key={index} className="pl-2">
                                <span className="-ml-2 block">{agreement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </>
                    )}
                  </div>
                )}

                {project.name === "How we used AI to simplify Rule Creation" ? (
                  <div className="-mx-8 md:-mx-16 lg:-mx-24 xl:-mx-32">
                    <div className="px-8 md:px-16 lg:px-24 xl:px-32 mb-8">
                      <h4 className="text-lg font-semibold text-foreground font-sora mb-3">
                        Updated Prototype <span className="text-riso-pink">(Click to begin)</span>
                      </h4>
                    </div>
                    <div className="mx-4 md:mx-8 mb-8 overflow-hidden">
                      <div className="bg-white rounded-lg shadow-lg border border-border overflow-hidden">
                        <div className="transform scale-90 origin-top-left w-[111.11%] h-[111.11%]">
                          <RuleCreationPrototype onAnyInteraction={hidePrototypePrompt} />
                        </div>
                      </div>
                    </div>
                  </div>
                ) : project.prototypeVideoUrl ? (
                  <div>
                    <h4 className="text-lg font-semibold text-foreground font-sora mb-3">Prototype</h4>
                    <div className="bg-white rounded-lg p-4 md:p-6 mb-8">
                      <div className="bg-card rounded-lg shadow-sm border border-border overflow-hidden">
                        <video
                          controls
                          preload="metadata"
                          className="w-full h-[580px] object-contain p-4"
                          playsInline
                        >
                          <source src={project.prototypeVideoUrl} type="video/quicktime" />
                          <source src={project.prototypeVideoUrl} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    </div>
                  </div>
                ) : null}

                {/* Before Video Section - Only for projects with videoUrl */}
                {project.videoUrl && (
                  <>
                    <h4 className="text-lg font-semibold text-foreground font-sora mb-3">Dunning Letter Before</h4>
                    <section className="bg-white rounded-lg p-4 md:p-6 mb-8">
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6">
                        {/* Interactive Prototype or Video Column */}
                        <div className="lg:col-span-8 bg-card rounded-lg shadow-sm border border-border overflow-hidden">
                          {project.hasInteractivePrototype ? (
                            <div className="p-4">
                              <DunningLetterBeforeInteractive />
                            </div>
                          ) : (
                            <video
                              controls
                              preload="metadata"
                              className="w-full h-[580px] object-contain p-4"
                              playsInline
                            >
                              <source src="/videos/dunning-before.mov" type="video/quicktime" />
                              <source src="/videos/dunning-before.mov" type="video/mp4" />
                              Your browser does not support the video tag.
                            </video>
                          )}
                        </div>

                        {/* Problems Column */}
                        <div className="lg:col-span-4 bg-card rounded-lg shadow-sm border border-border overflow-hidden h-full">
                          <figcaption className="px-4 py-3 border-b border-border text-sm font-semibold text-foreground text-center">
                            Identified Problems
                          </figcaption>
                          <div className="p-6">
                            <ul className="list-disc space-y-3 text-muted-foreground ml-6">
                              {project.problems?.map((item, index) => (
                                <li key={index} className="pl-2">
                                  <span className="-ml-2 block">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </section>

                    {/* After Video Section */}
                    <h4 className="text-lg font-semibold text-foreground font-sora mb-3">Dunning Letter After</h4>
                    <section className="bg-white rounded-lg p-4 md:p-6 mb-8">
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6">
                        {/* Interactive Prototype or Video Column */}
                        <div className="lg:col-span-8 bg-card rounded-lg shadow-sm border border-border overflow-hidden">
                          {project.hasAfterPrototype ? (
                            <div className="p-4">
                              <DunningLetterAfterInteractive />
                            </div>
                          ) : (
                            <video
                              controls
                              preload="metadata"
                              className="w-full h-[580px] object-contain p-4"
                              playsInline
                            >
                              <source src="/videos/dunning-after.mov" type="video/quicktime" />
                              <source src="/videos/dunning-after.mov" type="video/mp4" />
                              Your browser does not support the video tag.
                            </video>
                          )}
                        </div>

                        {/* Solutions Column */}
                        <div className="lg:col-span-4 bg-card rounded-lg shadow-sm border border-border overflow-hidden h-full">
                          <figcaption className="px-4 py-3 border-b border-border text-sm font-semibold text-foreground text-center">
                            Updated Solutions
                          </figcaption>
                          <div className="p-6">
                            <ul className="list-disc space-y-3 text-muted-foreground ml-6">
                              {Array.isArray(project.solutions) ? project.solutions.map((item, index) => (
                                <li key={index} className="pl-2">
                                  <span className="-ml-2 block">{item}</span>
                                </li>
                              )) : null}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </section>
                  </>
                )}

                {/* Out of Scope Section */}
                {project.outOfScope && (
                  <div className="bg-white rounded-lg p-6 mb-10">
                    <h4 className="text-lg font-semibold text-foreground font-sora mb-3">Out of Scope</h4>
                    <ul className="list-disc space-y-2 text-muted-foreground ml-6">
                      {project.outOfScope.map((item, index) => (
                        <li key={index} className="pl-2">
                          <span className="-ml-2 block">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div>
                  <h4 className="text-lg font-semibold text-foreground font-sora mb-8">Impact</h4>
                  <div className="overflow-x-auto mb-32">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left py-3 px-4 text-base font-semibold text-foreground" style={{fontFamily: 'Jost, sans-serif'}}>KPI</th>
                          <th className="text-left py-3 px-4 text-base font-semibold text-foreground" style={{fontFamily: 'Jost, sans-serif'}}>Before</th>
                          <th className="text-left py-3 px-4 text-base font-semibold text-foreground" style={{fontFamily: 'Jost, sans-serif'}}>After</th>
                          <th className="text-left py-3 px-4 text-base font-semibold text-foreground" style={{fontFamily: 'Jost, sans-serif'}}>Impact</th>
                        </tr>
                      </thead>
                      <tbody>
                        {project.impact.map((metric, index) => (
                          <tr key={index} className="border-b border-border/50">
                            <td className="py-3 px-4 text-base text-muted-foreground font-normal" style={{fontFamily: 'Jost, sans-serif'}}>{metric.metric}</td>
                            <td className="py-3 px-4 text-base font-normal text-muted-foreground" style={{fontFamily: 'Jost, sans-serif'}}>{metric.before}</td>
                            <td className="py-3 px-4 text-base font-semibold text-primary" style={{fontFamily: 'Jost, sans-serif'}}>{metric.after}</td>
                            <td className="py-3 px-4 text-base text-muted-foreground font-normal" style={{fontFamily: 'Jost, sans-serif'}}>{metric.description || ''}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>


                {/* Learnings Section */}
                {project.learnings && (
                  <div>
                    <h4 className="text-lg font-semibold text-foreground font-sora mb-3">Key Learnings</h4>
                    <ul className="list-disc space-y-3 text-muted-foreground ml-6 mb-10">
                      {project.learnings.map((learning, index) => (
                        <li key={index} className="pl-2">
                          <span className="-ml-2 block">{learning}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.relatedProjects && (
                  <div>
                    <h4 className="text-lg font-semibold text-foreground font-sora mb-3">Related Case Studies</h4>
                    <div className="space-y-4">
                      {project.relatedProjects.map((relatedProject, index) => (
                        <Link
                          key={index}
                          to={`/portfolio/${relatedProject.company}/${encodeURIComponent(relatedProject.name)}`}
                          className="group flex items-center gap-4 p-4 rounded-lg hover:bg-riso-background hover:text-riso-white transition-all duration-300"
                        >
                          {/* Small Thumbnail */}
                          <div className="flex-shrink-0 w-16 h-16 bg-riso-background rounded-lg flex items-center justify-center overflow-hidden">
                            <img
                              src={relatedProject.name === "Boosting Payment Success"
                                ? "/images/icons/boosting-payment.png"
                                : "/images/icons/design-dev-logo.png"
                              }
                              alt={relatedProject.name}
                              className="w-full h-full object-cover"
                            />
                          </div>

                          {/* Project Title */}
                          <div className="flex-1">
                            <h5 className="font-semibold text-foreground group-hover:text-riso-white transition-colors text-left font-sora">
                              {relatedProject.name}
                            </h5>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;