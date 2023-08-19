import { Link } from "react-router-dom";
import List from "../Fragments/List";
import FooterIcon from "../Fragments/FooterIcon";
const Footer = () => {
  return (
    <footer className="pt-3 pb-2">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-semibold mb-1">RafStore</h3>
            <ul className="mb-4">
              <List>Tentang RafStore</List>
              <List>Hak Kekayaan Intelektual</List>
              <List>Karir</List>
              <List>Blog</List>
              <List>Bridestory</List>
              <List>RafStore Parents</List>
              <List>Mitra Blog</List>
              <List>RafStore Affiliate Program</List>
              <List>RafStore B2B Digital</List>
            </ul>
            <h3 className="text-xl font-semibold mb-2">Beli</h3>
            <ul className="mb-4">
              <List>Tagihan & Top Up</List>
              <List>Tukar Tambah Handphone</List>
              <List>RafStore COD</List>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Beli</h3>
            <ul className="mb-4">
              <List>Jual Pusat Edukasi Seller</List>
              <List>Mitra Toppers</List>
              <List> Daftar Official Store</List>
            </ul>
            <h3 className="text-xl font-semibold mb-2">Bantuan dan Panduan </h3>
            <ul className="mb-4">
              <List>RafStore Care</List>
              <List>Syarat dan Ketentuan</List>
              <List>Kebijakan Privasi</List>
              <List>Mitra</List>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Ikuti Kami</h3>
            <div className="flex gap-x-4 mt-7">
              <FooterIcon nama="facebook" />
              <FooterIcon nama="twitter" />
              <FooterIcon nama="instagram" />
              <FooterIcon nama="pinterest" />
            </div>
            <div className="mt-10">
              <h1 className="text-[100px] font-bold ">RafStore</h1>
              <div className="flex gap-x-2 items-center mb-5">
                <Link>
                  <img src="/logo/appgallery.png" alt="" className="w-32" />
                </Link>
                <Link>
                  <img src="/logo/appstore.png" alt="" className="w-32" />
                </Link>
                <Link>
                  <img src="/logo/gpy.png" alt="" className="w-32" />
                </Link>
              </div>
              <p className="text-sm">© 2009 - 2023, PT. RafStore.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
