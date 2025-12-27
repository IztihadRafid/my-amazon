import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { ReactNode } from "react";

interface ContactItemData {
  icon: ReactNode;
  title: string;
  subtitle: string;
  link: string | null;
}

const data: ContactItemData[] = [
  {
    icon: <MapPin className="h-8 w-8 text-gray-600" />,
    title: "Visit Us",
    subtitle: "Uttara, Dhaka, Bangladesh",
    link: "maps.google.com",
  },
  {
    icon: <Phone className="h-8 w-8 text-gray-600" />,
    title: "Call Us",
    subtitle: "+880 1234567890",
    link: "tel:YourPhoneNumberHere",
  },
  {
    icon: <Clock className="h-8 w-8 text-gray-600" />,
    title: "Working Hours",
    subtitle: "Mon-Sat: 9:00 AM - 6:00 PM",
    link: null,
  },
  {
    icon: <Mail className="h-8 w-8 text-gray-600" />,
    title: "Email Us",
    subtitle: "myamazon@gmail.com",
    link: "mailto:your.email@example.com",
  },
];

const FooterTop = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 bg-gray-200 p-8 md:p-20 mx-auto ">
      {data?.map((item) => (
        <div key={item.title} className="flex justify-center items-center">
          <div className="p-6 ">{item.icon}</div>
          <div>
            <h3 className="text-lg">{item.title}</h3>
            <p className="cursor-pointer">{item.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FooterTop;
