import image1 from "../../public/assets/3e85543f7adbb694aee0db307db9f891.png";
import image2 from "../../public/assets/575527b810662ebba82eed814286b202.png";
import image3 from "../../public/assets/761d574dd4c3c9ad0e6215dff3cfa895.png";
import { BsGlobe } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { FiLock } from "react-icons/fi";
import { FaRegCircleUser } from "react-icons/fa6";


export const Data = [
    {
      id: 1,
      title: "Data Privacy and Unparalleled Security",
      description: "Our service prioritizes the confidentiality and security of your proprietary data. With robust encryption protocols and strict access controls, you can trust that your sensitive information remains protected throughout the training and deployment process. We adhere to industry best practices and compliance standards to ensure peace of mind for your organization.",
      image:image1.src,
      position:'flex-row'
    },
    {
        id: 2,
        title: "Customizable Model Architecture",
        description: "Tailor your machine learning models precisely to your business needs with our intuitive interface. From selecting algorithms to fine-tuning hyperparameters, our platform empowers users to design custom architectures that optimize performance and accuracy. Our service provides the flexibility to experiment and iterate until you achieve the desired outcomes.",
        image:image2.src,
        position:'flex-row-reverse'
    },
    {
        id: 3,
        title: "Seamless Deployment and Integration",
        description: "Once your custom models are trained, deploying them into production environments is effortless with our seamless integration capabilities. Our service supports various deployment options, including cloud-based hosting, on-premises deployment, and containerization, ensuring compatibility with your existing infrastructure. Our platform facilitates smooth deployment and integration, minimizing downtime and maximizing impact.",
        image:image3.src,
        position:'flex-row'

    },
    
  
  ];

export const FeaturesData = [
    {
      id: 1,
      title: "Tailored LLM Fine-Tuning",
      description1: "Tailored LLM fine-tuning involves adjusting large language models (LLMs) to cater specifically to the requirements of different industries. This customization ensures that the AI models deliver highly relevant and accurate outputs that are aligned with the unique contexts and challenges of each sector",
      description2: "By fine-tuning LLMs, Pankh AI provides solutions that enhance industry-specific applications, making AI a powerful tool for businesses to solve their specific problems and improve their processes.",
      Icon:BsGlobe
    },
    {
        id: 2,
        title: "High-Performance Training with NVIDIA GPUs",
        description1: "High-performance training with NVIDIA GPUs involves using NVIDIA's advanced graphics processing units (GPUs) to accelerate the training and deployment of AI models. GPUs are well-suited for the parallel processing tasks required in AI model training, significantly reducing the time it takes to train LLMs.",
        description2: "By leveraging NVIDIA's cutting-edge technology, Pankh AI ensures that its AI solutions are not only fast but also efficient, providing businesses with powerful tools that can handle large datasets and complex computations with ease.",
        Icon: SlCalender
      },
      {
        id: 3,
        title: "Seamless Integration",
        description1: "Seamless integration refers to the ability of Pankh AI's solutions to work harmoniously with a business's existing IT infrastructure and software. This means that companies do not need to overhaul their current systems to implement new AI technologies.",
        description2: "Instead, Pankh AI's solutions are designed to integrate smoothly, minimizing disruption and ensuring a quick, efficient transition. This integration capability allows businesses to enhance their operations with AI without the need for significant changes to their existing workflows.",
        Icon:FiLock
      },
      {
        id: 1,
        title: "Intuitive UI",
        description1: "An intuitive user interface (UI) is designed to be easy to use, ensuring that even users with minimal technical expertise can interact with complex AI systems effortlessly. This feature democratizes AI technology, enabling a broader range of employees to leverage AI capabilities without extensive training.",
        description2: "By providing a straightforward and accessible interface, Pankh AI ensures that businesses can maximize the adoption and utility of AI solutions across their organization.",
        Icon:FaRegCircleUser
      },
    
  
  ];