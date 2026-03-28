export interface InternshipData {
  id: string;
  internName: string;
  position: string;
  department: string;
  startDate: string;
  endDate: string;
  tasks: string[];
  certificateNumber: string;
  issueDate: string;
}

// Mock data for demonstration
export const mockInternships: Record<string, InternshipData> = {
  "INT2024001": {
    id: "INT2024001",
    internName: "Sarah Johnson",
    position: "Software Development Intern",
    department: "Engineering",
    startDate: "2024-01-15",
    endDate: "2024-04-15",
    tasks: [
      "Developed responsive web applications using React and TypeScript",
      "Collaborated with senior developers on API integration",
      "Participated in code reviews and agile sprint meetings",
      "Created documentation for internal tools",
      "Implemented unit tests for frontend components"
    ],
    certificateNumber: "CERT-2024-001",
    issueDate: "2024-04-20"
  },
  "INT2024002": {
    id: "INT2024002",
    internName: "Michael Chen",
    position: "Data Analytics Intern",
    department: "Business Intelligence",
    startDate: "2024-02-01",
    endDate: "2024-05-01",
    tasks: [
      "Analyzed customer data to identify trends and patterns",
      "Created interactive dashboards using Tableau and Power BI",
      "Assisted in developing data pipelines for automated reporting",
      "Conducted market research and competitive analysis",
      "Presented findings to stakeholders in weekly meetings"
    ],
    certificateNumber: "CERT-2024-002",
    issueDate: "2024-05-10"
  },
  "INT2024003": {
    id: "INT2024003",
    internName: "Emily Rodriguez",
    position: "Marketing Intern",
    department: "Marketing & Communications",
    startDate: "2024-01-10",
    endDate: "2024-03-10",
    tasks: [
      "Managed social media accounts and created engaging content",
      "Designed marketing materials for product launches",
      "Conducted SEO analysis and implemented optimization strategies",
      "Coordinated email marketing campaigns",
      "Tracked and analyzed campaign performance metrics"
    ],
    certificateNumber: "CERT-2024-003",
    issueDate: "2024-03-15"
  }
};
