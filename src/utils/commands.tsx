import portfolioData from "../data/hubs-portfolio.json";
import type { JSX } from "react";
import type { Command, CommandOutput } from "../types/terminal";
import Help from "../components/Help";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import { ProjectComponent } from "../components/Project";
import Experiences from "../components/Experiences";
import Educations from "../components/Educations";
import Contacts from "../components/Contacts";
import Welcome from "../components/Welcome";

export const commands: Record<string, Command> = {
  help: {
    name: "help",
    description: "Display avaiable commands",

    execute: () => createOutput(<Help commands={commands} />, "info"),
  },

  about: {
    name: "about",
    description: "Learn more about me",

    execute: () => createOutput(<About portfolioData={portfolioData} />),
  },

  skills: {
    name: "skills",
    description: "View my technical skills",

    execute: () => createOutput(<Skills portfolioData={portfolioData} />),
  },

  projects: {
    name: "projects",
    description: "View my portfolio projects",

    execute: (args) => {
      if (args.length > 0) {
        const index = parseInt(args[0]) - 1;

        if (index >= 0 && index < portfolioData.projects.length) {
          const project = portfolioData.projects[index];

          return createOutput(<ProjectComponent project={project} />);
        }
        return createOutput(
          `Project ${args[0]} not found. Use 'projects' to see all projects.`,
          "error",
        );
      }

      return createOutput(<Projects projects={portfolioData.projects} />);
    },
  },

  experience: {
    name: "experience",
    description: "View my work experience",

    execute: () =>
      createOutput(<Experiences experiences={portfolioData.experience} />),
  },

  education: {
    name: "education",
    description: "View my education background",

    execute: () =>
      createOutput(
        <Educations
          educations={portfolioData.education}
          certifications={portfolioData.certifications}
        />,
      ),
  },

  contact: {
    name: "contact",
    description: "Get my contact information",

    execute: () => createOutput(<Contacts portfolioData={portfolioData} />),
  },

  clear: {
    name: "clear",
    description: "Clear the terminal screen",
    execute: () => createOutput("", "info"),
  },

  whoami: {
    name: "whoami",
    description: "Display current user",
    execute: () =>
      createOutput(
        `visitor@${portfolioData.name.toLowerCase().replace(/\s+/g, "-")}-portfolio`,
        "info",
      ),
  },

  date: {
    name: "date",
    description: "Display current date and time",
    execute: () =>
      createOutput(
        new Date().toLocaleString("en-US", {
          timeZone: "Etc/GMT-3", // Note: Sign is inverted in 'Etc' format
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
        "info",
      ),
  },

  echo: {
    name: "echo",
    description: "Display a line of text",
    usage: "echo [text]",
    execute: (args) => createOutput(args.join(" "), "info"),
  },

  welcome: {
    name: "welcome",
    description: "Display welcome message",
    execute: () => createOutput(<Welcome name={portfolioData.name} />, "info"),
  },
};

const createOutput = (
  content: string | JSX.Element,
  type: "success" | "error" | "info" = "success",
): CommandOutput => ({
  type,
  content,
});

export const executeCommand = (input: string): CommandOutput => {
  const trimmedInput = input.trim();

  const [commandName, ...args] = trimmedInput.split(/\s+/);
  const command = commands[commandName.toLowerCase()];

  if (!command) {
    return createOutput(
      `Command not found: ${commandName}. Type 'help' for available commands.`,
    );
  }

  return command.execute(args);
};

export const getCommandSuggestions = (input: string): string[] => {
  if (!input) return [];

  const commandNames = Object.keys(commands);
  return commandNames.filter((cmd) => cmd.startsWith(input.toLowerCase()));
};
