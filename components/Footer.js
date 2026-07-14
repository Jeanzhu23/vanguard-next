import Link from "next/link";
import { CLUB, INSTAGRAM, APP_IOS, APP_ANDROID } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <div className="fbrand">◤ {CLUB.name}</div>
            <p style={{ maxWidth: "34ch", margin: 0 }}>{CLUB.tagline}</p>
          </div>

          <div>
            <h4>Club</h4>
            <ul>
              <li><Link href="/the-club">The Club</Link></li>
              <li><Link href="/membership">Membership</Link></li>
              <li><Link href="/lessons">Lessons</Link></li>
              <li><Link href="/junior-golf">Junior Golf</Link></li>
              <li><Link href="/membership#cancellation">Cancellation Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4>Contact</h4>
            <ul>
              <li>110 Stergis Way</li>
              <li>Dedham, MA 02026</li>
              <li>{CLUB.phone}</li>
              <li>{CLUB.hours}</li>
            </ul>
          </div>

          <div>
            <h4>Connect</h4>
            <ul>
              <li><a href={INSTAGRAM} target="_blank" rel="noopener">Instagram</a></li>
              <li><a href={APP_IOS} target="_blank" rel="noopener">Member app — iOS</a></li>
              <li><a href={APP_ANDROID} target="_blank" rel="noopener">Member app — Android</a></li>
              <li><Link href="/contact">{CLUB.email}</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {CLUB.name}</span>
          <span className="footer-legal">
            <Link href="/terms">Terms &amp; Conditions</Link>
            <Link href="/policies">Club Policies</Link>
          </span>
          <span>Mass Golf &amp; USGA member club</span>
        </div>
      </div>
    </footer>
  );
}
