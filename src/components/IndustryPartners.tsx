import Image from "next/image";

export function IndustryPartners() {
  const partners = [
    {
      name: "Chicago Association of Realtors",
      logo: "/assets/images/partners/chicagoassociationofrealtors.png",
      width: 200,
      height: 80,
    },
    {
      name: "Midwest Renewable Energy Association",
      logo: "/assets/images/partners/mrea.jpg",
      width: 200,
      height: 80,
    },
    {
      name: "Climatebase",
      logo: "/assets/images/partners/climatebase.png",
      width: 200,
      height: 80,
    },
    {
      name: "Green Real Estate National Business Alliance",
      logo: "/assets/images/partners/grnba.png",
      width: 200,
      height: 80,
    },
    {
      name: "Chicago Innovation",
      logo: "/assets/images/partners/chicago-innovation.jpeg",
      width: 200,
      height: 80,
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Industry Partners
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Collaborating with leading organizations to advance clean energy and sustainable development
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center max-w-5xl mx-auto">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 bg-background rounded-lg border border-border hover:shadow-lg transition-shadow"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={partner.width}
                height={partner.height}
                className="w-full h-auto object-contain max-h-20"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

