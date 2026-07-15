import { useState } from "react";
import { MapPin, MessageCircle, Wifi, Coffee, Trees, UtensilsCrossed } from "lucide-react";

const propertyImages = [
  {
    id: 1,
    url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/695081517.jpg?k=d54fe08dc1a1a923609602935b6c9606bdcbb490ce3f2f20338ac1d51e10cb95&o=",
    alt: "Exterior view of luxury chalet"
  },
  {
    id: 2,
    url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/695081604.jpg?k=93863d9c7a7e3fb57940420b8c9c7cc760b2f8b6bb912fde73b5e363bcf71ce3&o=",
    alt: "Cozy bedroom"
  },
  {
    id: 3,
    url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/692759724.jpg?k=6f25bcdb65327ad0c1f5054be29e958361e51eebbc2a0a45b76be077b05b524b&o=",
    alt: "Living area"
  },
  {
    id: 4,
    url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/695081442.jpg?k=0a5096fbf27a38ff06e594bda380b73df634be854611e85bc106609771dc3d23&o=",
    alt: "Bedroom details"
  },
  {
    id: 5,
    url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/692759732.jpg?k=b0ad6f3612b571283f1743c4e12f65fbf993a34b2a9ac2501b0a610db6b4f5e4&o=",
    alt: "Interior view"
  },
  {
    id: 6,
    url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/692759627.jpg?k=e05e8b65af9ded9ef77e177927315285a2ad5b07075a0d5a81cf7a48c6fbb78d&o=",
    alt: "Bathroom"
  },
  {
    id: 7,
    url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/692759596.jpg?k=001b15c09c4a09c2081ff3550a4e9b659225e0725ec9be36601a73fac100bdeb&o=",
    alt: "Kitchen area"
  },
  {
    id: 8,
    url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/692759652.jpg?k=1416cce6b55caaf6fd3259172d78d857daf73a4ede410bbd02c6426293246536&o=",
    alt: "Room details"
  },
  {
    id: 9,
    url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/692759707.jpg?k=adcb3af2e33c33370041cd3d2a17e0034bec5bd31ad2ea4b8c436a0ebefc77b2&o=",
    alt: "Exterior details"
  },
  {
    id: 10,
    url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/692759683.jpg?k=25aba3338555970a4bb4aca67c6505774e2f9ac2aea37de77802dc2510007774&o=",
    alt: "Chalet view"
  }
];

const features = [
  {
    icon: Wifi,
    title: "High-Speed WiFi",
    description: "Stay connected with premium internet"
  },
  {
    icon: Coffee,
    title: "Modern Amenities",
    description: "All creature comforts for your stay"
  },
  {
    icon: Trees,
    title: "Nature Access",
    description: "Direct access to nature trails"
  },
  {
    icon: UtensilsCrossed,
    title: "Full Kitchen",
    description: "Complete culinary facilities"
  }
];

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="font-heading font-bold text-2xl text-primary">
            Pousada Lua Chalé
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/5548984829654?text=Olá! Gostaria de agendar uma estadia na Pousada Lua Chalé."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors font-medium text-sm"
            >
              WhatsApp
            </a>
            <a
              href="https://www.booking.com/hotel/br/chales-sol-e-lua-blumenau.pt-br.html"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 border-2 border-primary text-primary rounded-full hover:bg-primary/10 transition-colors font-medium text-sm"
            >
              Booking
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/695081517.jpg?k=d54fe08dc1a1a923609602935b6c9606bdcbb490ce3f2f20338ac1d51e10cb95&o="
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-6 max-w-4xl">
            Seu Refúgio Perfeito em Blumenau
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl font-light">
            Chale luxuoso com vista para a natureza
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/5548984829654?text=Olá! Gostaria de agendar uma estadia no Chales Sol e Lua."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors font-semibold text-lg flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Agendar via WhatsApp
            </a>
            <a
              href="https://www.booking.com/hotel/br/chales-sol-e-lua-blumenau.pt-br.html"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-primary rounded-full hover:bg-gray-100 transition-colors font-semibold text-lg"
            >
              Ver no Booking
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
            Comodidades Premium
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-heading text-xl font-semibold mb-2 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section with Zoom Effect */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
            Galeria de Fotos
          </h2>
          <p className="text-center text-gray-600 mb-16 text-lg max-w-2xl mx-auto">
            Passe o cursor sobre as imagens para uma visualização ampliada. Descubra cada detalhe do nosso chale.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {propertyImages.map((image) => (
              <div
                key={image.id}
                className="group relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedImage(image.url)}
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for enlarged image */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full max-h-[90vh]">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={selectedImage}
              alt="Enlarged"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Pronto para sua experiência inesquecível?
          </h2>
          <p className="text-lg md:text-xl mb-10 opacity-95">
            Entre em contato conosco via WhatsApp ou reserve agora no Booking
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5548984829654?text=Olá! Gostaria de agendar uma estadia no Chales Sol e Lua."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-primary rounded-full hover:bg-gray-100 transition-colors font-semibold text-lg flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp: +55 48 8482-9654
            </a>
            <a
              href="https://www.booking.com/hotel/br/chales-sol-e-lua-blumenau.pt-br.html"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-white text-white rounded-full hover:bg-white/10 transition-colors font-semibold text-lg"
            >
              Reservar no Booking
            </a>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-8">
            <MapPin className="w-6 h-6 text-primary" />
            <h2 className="font-heading text-3xl font-bold text-gray-900">
              Localização
            </h2>
          </div>
          <p className="text-center text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Blumenau, Santa Catarina - Seu destino perfeito na Serra Geral
          </p>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <iframe
              title="Chales Sol e Lua Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3600.3394771635666!2d-49.01666!3d-26.929444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce1d46b5b5b5b%3A0x1234567890123456!2sChales%20Sol%20e%20Lua!5e0!3m2!1spt-BR!2sbr!4v1234567890123"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: "0.5rem" }}
              allowFullScreen={true}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 pb-8 border-b border-gray-800">
            <div>
              <h3 className="font-heading text-lg font-bold text-white mb-4">
                Pousada Lua Chalé
              </h3>
              <p className="text-sm">Seu refúgio luxuoso em Blumenau, Santa Catarina.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contato</h4>
              <p className="text-sm mb-2">WhatsApp: +55 48 8482-9654</p>
              <a href="https://www.booking.com/hotel/br/chales-sol-e-lua-blumenau.pt-br.html" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-primary transition-colors">
                Booking.com
              </a>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Localização</h4>
              <p className="text-sm">Blumenau, SC<br />Brasil</p>
            </div>
          </div>
          <div className="text-center text-sm">
            <p>&copy; 2024 Pousada Lua Chalé. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
