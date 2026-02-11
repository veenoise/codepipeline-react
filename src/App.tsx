import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Cloud, Rocket, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut" as const,
    },
  },
};

export default function AwsPipelineShowcase() {
  const sections = [
    {
      title: "GitHub Integration",
      icon: <Github size={32} />,
      description:
        "Automatically trigger pipelines when code is pushed or pull requests are merged. Seamless integration allows fast, reliable CI/CD workflows.",
      features: [
        "Webhook triggered builds",
        "Version controlled source",
        "Branch-based deployment strategies",
        "Collaborative workflows",
      ],
    },
    {
      title: "AWS CodeBuild",
      icon: <Cloud size={32} />,
      description:
        "Fully managed build service that compiles source code, runs tests, and produces ready-to-deploy artifacts.",
      features: [
        "Scalable build environments",
        "Multi-language support",
        "Parallel testing",
        "Artifact generation",
      ],
    },
    {
      title: "AWS CodeDeploy",
      icon: <Rocket size={32} />,
      description:
        "Automate application deployment to EC2, Lambda, and on-premise servers with minimal downtime.",
      features: [
        "Blue/Green deployments",
        "Rolling updates",
        "Automatic rollback",
        "Deployment health monitoring",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-slate-100 p-6">
      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          show: {
            transition: { staggerChildren: 0.15 },
          },
        }}
        className="max-w-6xl mx-auto"
      >
        <motion.header
          variants={fadeUp}
          className="text-center mb-14"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            AWS CodePipeline CI/CD Showcase
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
            A modern continuous integration and deployment workflow using
            GitHub, AWS CodeBuild, and CodeDeploy.
          </p>
        </motion.header>

        <section className="grid md:grid-cols-3 gap-8 mb-14 items-stretch">
          {sections.map((section) => (
            <motion.div key={section.title} variants={fadeUp} whileHover={{ y: -8 }} className="h-full">
              <Card className="bg-slate-900/70 backdrop-blur border border-slate-700/60 rounded-2xl shadow-2xl transition-all duration-300 h-full flex flex-col">
                <CardHeader>
                  <div className="mb-3 text-blue-400">{section.icon}</div>
                  <CardTitle className="text-xl text-slate-100">
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow">
                  <p className="text-slate-300 mb-5 leading-relaxed">
                    {section.description}
                  </p>
                  <ul className="space-y-2 text-sm text-slate-400 mt-auto">
                    {section.features.map((feature) => (
                      <li key={feature}>• {feature}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </section>

        <motion.section variants={fadeUp} className="mb-14">
          <Card className="bg-slate-900/70 backdrop-blur border border-slate-700/60 rounded-2xl shadow-2xl">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2 text-slate-100">
                <ShieldCheck /> Pipeline Workflow Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-300 mb-6 leading-relaxed">
                AWS CodePipeline orchestrates the CI/CD process by connecting
                GitHub, CodeBuild, and CodeDeploy into an automated workflow.
              </p>

              <div className="grid md:grid-cols-3 gap-5 text-center">
                {[
                  {
                    title: "1. Source",
                    text:
                      "Developers push code changes to GitHub, triggering pipeline execution.",
                  },
                  {
                    title: "2. Build",
                    text:
                      "CodeBuild compiles, tests, and packages application artifacts.",
                  },
                  {
                    title: "3. Deploy",
                    text:
                      "CodeDeploy safely releases the application to production environments.",
                  },
                ].map((step) => (
                  <motion.div
                    key={step.title}
                    whileHover={{ scale: 1.04 }}
                    className="p-5 bg-slate-800/80 border border-slate-700/60 rounded-xl transition-all"
                  >
                    <h3 className="font-semibold mb-2 text-slate-100">
                      {step.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {step.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.section>

        <motion.section variants={fadeUp} className="text-center">
          <motion.div whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.96 }}>
            <Button className="text-lg px-10 py-6 rounded-2xl shadow-xl bg-blue-600 hover:bg-blue-500 transition-colors">
              Learn More About AWS CI/CD
            </Button>
          </motion.div>
        </motion.section>
      </motion.div>
    </div>
  );
}
