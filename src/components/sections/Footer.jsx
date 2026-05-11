import Container from "../ui/Container";

export default function Footer() {
  return (
    <footer className="bg-primary text-background py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-white text-lg font-semibold mb-3">
              Contact Us
            </h3>
            <p className="text-sm">
              <a
                href="mailto:majorgakz2022@gmail.com"
                className="hover:text-white transition-colors"
              >
                majorgakz2022@gmail.com
              </a>
            </p>
            <p className="text-sm mt-1">
              <a
                href="tel:+16473900001"
                className="hover:text-white transition-colors"
              >
                Call: (647) 390-0001
              </a>
            </p>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-3">About Us</h3>
            <p className="text-sm leading-relaxed">
              Major Gakz Framing Construction Ltd. delivers reliable,
              high-quality framing services with precision and efficiency.
              Established in 2022, we specialize in strong structural framing
              for residential projects, built with craftsmanship you can trust.
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-700 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-gray-500">
          <span className="text-white font-medium italic">
            Built strong. Built right.
          </span>
          <span>
            © {new Date().getFullYear()} Major Gakz Framing Construction Ltd.
          </span>
        </div>
      </Container>
    </footer>
  );
}
