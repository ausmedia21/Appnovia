import React from 'react'
const BlogCards = () => {
    const cards = [
      {
        image: "/images/image 18.png",
        title: "Creating Streamlined Safeguarding Processes with OneRen",
        link: "#"
      },
      {
        image: "/images/image 19.png",
        title: "What are your safeguarding responsibilities and how can you manage them?",
        link: "#"
      },
      {
        image: "/images/image 20.png",
        title: "Revamping the Membership Model with Triathlon Australia",
        link: "#"
      }
    ];
  
    return (
      <div className="container mx-auto px-4 py-10">
        <div className="space-y-6 mx-auto max-w-[500px]">
          <h2 className="text-center text-4xl font-semibold text-accent">Caring is the new marketing</h2>
          <p className="text-center text-neutral3 text-lg">The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {cards.map((card, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={card.image} alt="Blog" className="w-full h-56 object-cover" />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-neutral3">{card.title}</h3>
                <a href={card.link} className="text-primary font-semibold text-lg mt-3 inline-flex items-center">
                  Read more →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
}

export default BlogCards