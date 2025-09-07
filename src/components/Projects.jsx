import Card from "./Card";
import placeholder_img from "../assets/placeholder.png";
import pytorch_logo_img from "../assets/pytorch-logo.png";
import transformers_img from "../assets/transformers.png";
import object_detection_img from "../assets/object-detection.png";
import lulc_img from "../assets/lulc.png";
import design_patterns_img from "../assets/design-patterns.png";
import insulator_img from "../assets/insulator.png";
import bird_nest_img from "../assets/bird-nest.png";
import pole_detection_img from "../assets/pole-detection.png";


export default function Projects() {
    const projects = [
        {
            title: "My Tutorials",
            description: "Python & Pytorch Tutorials on Notion",
            image: pytorch_logo_img,
            link: "https://tasty-brick-eb9.notion.site/indekiler-9c900c2697554ff58a2dc03110d7ca9a?source=copy_link"
        },
        {
            title: "Transformer Artitecture",
            description: "An article detailing the logic behind the operation of transformers.",
            image: transformers_img,
            link: "https://medium.com/@blitzkrieg0000/transformers-b46b8b1475dc"
        },
        {
            title: "Object Detection",
            description: "It explains the Object Detection architecture that demonstrates how YOLO works.",
            image: object_detection_img,
            link: "https://miro.com/app/board/uXjVJLsUa0A=/?share_link_id=848945363325"
        },
        , {
            title: "Design Patterns",
            description: "A cheatsheet for design patterns based on Refactoring Guru.",
            image: design_patterns_img,
            link: "https://miro.com/app/board/uXjVJLuBSDE=/"
        },
        , {
            title: "Geospatial Data Workflow",
            description: "Data collection project using LULC analysis using Google GeoSpatial libraries and APIs",
            image: lulc_img,
            link: "https://huggingface.co/spaces/blitzkrieg0000/geospatial"
        },
        {
            title: "Detection & Segmentation",
            description: "High-Voltage Power Line and Pole Detection & Segmentation Application",
            image: pole_detection_img,
            link: "https://huggingface.co/spaces/blitzkrieg0000/CablePoleSegmentation"
        }, 
        {
            title: "Fault Detection",
            description: "This project involves the detection of faults in high-voltage line insulators using advanced image processing and AI techniques to ensure reliable power transmission and prevent outages.",
            image: insulator_img,
            link: "https://huggingface.co/spaces/blitzkrieg0000/IsolatorFaultDetection"
        },
        {
            title: "Bird Nest Detection",
            description: "This project focuses on detecting bird nests on high-voltage power lines using computer vision and deep learning techniques.",
            image: bird_nest_img,
            link: "https://huggingface.co/spaces/blitzkrieg0000/BirdNestDetection"
        },

    ];

    return (
        <section className="projects">
            <h2>Works</h2>
            <div className="card-container">
                {projects.map((p, i) => (
                    <Card key={i} {...p} />
                ))}
            </div>
        </section>
    );
}