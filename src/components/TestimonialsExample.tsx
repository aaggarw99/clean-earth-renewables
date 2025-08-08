import { TestimonialsCarousel } from "./TestimonialsCarousel";

// Example usage of the TestimonialsCarousel component
export function TestimonialsExample() {
  const testimonials = [
    {
      id: 1,
      name: "Steven S",
      company: "Landowner & Former Mayor of Congerville, Illinois",
      image: "/assets/images/testimonials/steven.png", // You'll need to add this image
      text: "I've been privileged to live in my community for **40+ years**, and have always farmed my land. But our family had been having talks about the **next generation of landownership**, so it was imperative we partnered with a developer who understood our mindset and worked in harmony with our community needs. **David ensured that every concern I had about leasing my land for community solar was met**. He was patient, attentive to detail, and really cared that I received the **best offer possible for my land**. Thanks to David, my family is looking at **financial security for the next 20 - 40 years**, and our farm will create enough energy to power town facilities, local residences and businesses without the need for them to install or invest in solar! Thank you, David and Clean Earth Renewables for helping our family & community!"
    },
    {
      id: 2,
      name: "Martha R",
      company: "Landowner in Will County, Illinois",
      image: "/assets/images/testimonials/martha.png", // You'll need to add this image
      text: "I was introduced to Clean Earth by a member of their land acquisition team who informed me that my **40+ acres land might be eligible for hosting a solar farm**. Here's how it worked: within the first **30-days**, I had an exclusive offer with terms and conditions fully negotiated. Within **60-days**, I had a fully-executed contract and my first scheduled option payment is on the way! In addition, my site is potentially eligible to host **2 solar farms** due to Illinois being eligible to co-locate 2 solar farms. We are another 60-days out from securing a 2nd project and additional ~40 acres, and approximately **<3 years out from securing 20+ years of guaranteed passive income**, that is going to support our local community with a reliable, sustainable source of power, and provide tax revenue to our county."
    },
    {
      id: 3,
      name: "Ansar M",
      company: "Landowner in McHenry County, Illinois",
      image: "/assets/images/testimonials/ansar.jpeg", // You'll need to add this image
      text: "I was introduced to Clean Earth by a contractor whom I've worked with for years, and he informed me that my land was appealing to Clean Earth's community solar site selection team. Since I recently purchased the property and was looking for an innovative way to cover my mortgage, the **rental income they offered me for nearly three quarter's of the land covered my entire mortgage**, and I was still able to reserve several acres for my animals to graze the fields. We are considering leveraging my animals to graze the solar farm for it's entire operating life, which means the animals still get plenty of space and we essentially keep the land as-is, with solar providing clean energy to the local utility grid. It's a **great way for us to keep farmland in the community** that also benefits the community with additional energy and tax benefits."
    },
    {
      id: 4,
      name: "Sherri B",
      company: "Landowner in Richland County, Illinois",
      image: "/assets/images/testimonials/sherri.png", // You'll need to add this image
      text: "Working with **David at Clean Earth to secure our land lease was very easy**. He secured **above-market rental rates & terms** for us with a top community solar operator in Illinois, and we've already earned our **first pre-construction option payment**. Both organizations have been a pleasure to work with and we are excited to move through the development process and begin earning soon. Thank you David & Clean Earth Renewables!"
    }
  ];

  return (
    <TestimonialsCarousel
      testimonials={testimonials}
      title="What Our Clients Say"
      subtitle="Hear from the people who trust Clean Earth Renewables"
    />
  );
} 