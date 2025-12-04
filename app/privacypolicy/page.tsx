import Container from "@/components/Container";
import GlowCard from "@/components/GlowCard";
import Link from "next/link";

export const runtime = "edge";

export default function PrivacyPolicy() {
    return (
        <Container className="py-20">
            <h1 className="text-4xl md:text-6xl font-bold mb-12 text-center">
                <span className="text-white">Privacy </span>
                <span className="text-neon-primary">Policy</span>
            </h1>

            <div className="max-w-3xl mx-auto space-y-8 text-text-muted">
                <GlowCard>
                    <h2 className="text-2xl font-bold text-neon-secondary mb-4">1. Introduction</h2>
                    <div className="space-y-4 leading-relaxed">
                        <p>
                            This Privacy Policy (&quot;Policy&quot;) describes how Greyletters (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;, or the &quot;Website&quot;)
                            handles information when you access or use our website located at greyletters.com (the &quot;Service&quot;).
                        </p>
                        <p>
                            By accessing or using our Service, you acknowledge that you have read, understood, and agree to be bound
                            by this Privacy Policy. If you do not agree with any part of this Policy, you should discontinue use of our Service immediately.
                        </p>
                        <p>
                            This Policy is effective as of December 2025 and will remain in effect except with respect to any changes
                            in its provisions in the future, which will be in effect immediately after being posted on this page.
                        </p>
                    </div>
                </GlowCard>

                <GlowCard>
                    <h2 className="text-2xl font-bold text-neon-secondary mb-4">2. Information We Collect</h2>
                    <div className="space-y-4 leading-relaxed">
                        <p>
                            <span className="text-white font-medium">We do not collect any personal data or personally identifiable information (PII).</span>
                        </p>
                        <p>
                            Our Website is designed as a static content platform with no interactive features that would require
                            the collection, storage, or processing of personal information. Specifically, we do not collect,
                            store, process, or have access to:
                        </p>
                        <ul className="list-disc list-inside space-y-2 pl-4">
                            <li>Names, email addresses, or contact information</li>
                            <li>IP addresses or geolocation data</li>
                            <li>Browser type, version, or device information</li>
                            <li>Operating system information</li>
                            <li>Browsing history or navigation patterns</li>
                            <li>Cookies, tracking pixels, or similar technologies</li>
                            <li>Any form of user-generated content or submissions</li>
                            <li>Financial or payment information</li>
                            <li>Biometric data or health information</li>
                            <li>Social media profiles or identifiers</li>
                        </ul>
                        <p>
                            This Website does not use cookies, web beacons, tracking scripts, analytics services (such as Google Analytics),
                            advertising networks, or any other data collection mechanisms. There is no database, no user registration system,
                            no comment functionality, and no server-side logging of visitor activity.
                        </p>
                    </div>
                </GlowCard>

                <GlowCard>
                    <h2 className="text-2xl font-bold text-neon-accent mb-4">3. Third-Party Services: Cloudflare</h2>
                    <div className="space-y-4 leading-relaxed">
                        <p>
                            Our Website is hosted on Cloudflare Workers and utilizes Cloudflare&apos;s global content delivery network (CDN),
                            DDoS protection, and security services. Cloudflare is a third-party service provider that operates independently
                            from Greyletters.
                        </p>
                        <p>
                            <span className="text-white font-medium">Data Processing by Cloudflare:</span>
                        </p>
                        <p>
                            When you access our Website, your connection is routed through Cloudflare&apos;s network. As part of providing
                            their services, Cloudflare may temporarily process certain technical information, including but not limited to:
                        </p>
                        <ul className="list-disc list-inside space-y-2 pl-4">
                            <li>Your IP address</li>
                            <li>HTTP request headers</li>
                            <li>Timestamp of the request</li>
                            <li>The URL of the page requested</li>
                            <li>HTTP response status code</li>
                            <li>Amount of data transferred</li>
                            <li>Referrer URL (if applicable)</li>
                            <li>User agent string (browser/device information)</li>
                        </ul>
                        <p>
                            This processing is performed automatically by Cloudflare for legitimate purposes including:
                        </p>
                        <ul className="list-disc list-inside space-y-2 pl-4">
                            <li>Protection against distributed denial-of-service (DDoS) attacks</li>
                            <li>Detection and prevention of malicious traffic</li>
                            <li>Web application firewall (WAF) functionality</li>
                            <li>Bot management and mitigation</li>
                            <li>Content delivery optimization</li>
                            <li>Network security and abuse prevention</li>
                        </ul>
                        <p>
                            <span className="text-white font-medium">Important Clarifications:</span>
                        </p>
                        <ul className="list-disc list-inside space-y-2 pl-4">
                            <li>Cloudflare processes this data as an independent data controller under its own privacy policy</li>
                            <li>We (Greyletters) do not have access to, cannot view, and do not receive any of this data</li>
                            <li>Cloudflare does not share individual visitor data with us</li>
                            <li>The data retention period is determined by Cloudflare&apos;s policies, not ours</li>
                        </ul>
                        <p>
                            For comprehensive information about how Cloudflare collects, processes, stores, and protects your data,
                            including your rights under applicable data protection laws, please review Cloudflare&apos;s Privacy Policy:
                        </p>
                        <Link
                            href="https://www.cloudflare.com/privacypolicy/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block text-neon-primary hover:text-neon-secondary transition-colors underline underline-offset-4"
                        >
                            https://www.cloudflare.com/privacypolicy/
                        </Link>
                    </div>
                </GlowCard>

                <GlowCard>
                    <h2 className="text-2xl font-bold text-neon-secondary mb-4">4. Legal Basis for Processing</h2>
                    <div className="space-y-4 leading-relaxed">
                        <p>
                            Since we do not collect or process any personal data, we do not require a legal basis for data processing
                            under the General Data Protection Regulation (GDPR), the California Consumer Privacy Act (CCPA), or other
                            applicable data protection legislation.
                        </p>
                        <p>
                            For data processing performed by Cloudflare as described in Section 3, Cloudflare relies on its own legal
                            bases, which may include legitimate interests in providing security services and protecting the integrity
                            of its network and customers&apos; websites.
                        </p>
                    </div>
                </GlowCard>

                <GlowCard>
                    <h2 className="text-2xl font-bold text-neon-secondary mb-4">5. Your Rights</h2>
                    <div className="space-y-4 leading-relaxed">
                        <p>
                            Under various data protection laws, including the GDPR (for EU/EEA residents) and CCPA (for California residents),
                            individuals have certain rights regarding their personal data, including:
                        </p>
                        <ul className="list-disc list-inside space-y-2 pl-4">
                            <li>Right to access</li>
                            <li>Right to rectification</li>
                            <li>Right to erasure (&quot;right to be forgotten&quot;)</li>
                            <li>Right to restriction of processing</li>
                            <li>Right to data portability</li>
                            <li>Right to object</li>
                            <li>Right to withdraw consent</li>
                            <li>Right to lodge a complaint with a supervisory authority</li>
                        </ul>
                        <p>
                            <span className="text-white font-medium">Because we do not collect any personal data, these rights cannot be exercised
                                against us as there is no personal data to access, rectify, delete, or port.</span>
                        </p>
                        <p>
                            For any data processed by Cloudflare, please refer to Cloudflare&apos;s privacy policy and contact Cloudflare
                            directly to exercise your data protection rights regarding their processing activities.
                        </p>
                    </div>
                </GlowCard>

                <GlowCard>
                    <h2 className="text-2xl font-bold text-neon-secondary mb-4">6. Children&apos;s Privacy</h2>
                    <div className="space-y-4 leading-relaxed">
                        <p>
                            Our Service is not directed to individuals under the age of 13 (or the applicable age of digital consent
                            in your jurisdiction). We do not knowingly collect personal information from children. Since we do not
                            collect any personal data from any visitors, we do not collect data from children.
                        </p>
                    </div>
                </GlowCard>

                <GlowCard>
                    <h2 className="text-2xl font-bold text-neon-secondary mb-4">7. International Data Transfers</h2>
                    <div className="space-y-4 leading-relaxed">
                        <p>
                            As we do not collect or store any personal data, we do not transfer personal data internationally.
                        </p>
                        <p>
                            Cloudflare operates a global network and may process technical connection data in various countries.
                            For information about Cloudflare&apos;s international data transfers and the safeguards they implement,
                            please refer to their privacy policy.
                        </p>
                    </div>
                </GlowCard>

                <GlowCard>
                    <h2 className="text-2xl font-bold text-neon-secondary mb-4">8. Data Security</h2>
                    <div className="space-y-4 leading-relaxed">
                        <p>
                            Although we do not collect personal data, we implement reasonable technical measures to ensure the
                            security and integrity of our Website, including:
                        </p>
                        <ul className="list-disc list-inside space-y-2 pl-4">
                            <li>HTTPS encryption for all connections</li>
                            <li>Cloudflare&apos;s security services including DDoS protection and WAF</li>
                            <li>Regular security updates and maintenance</li>
                        </ul>
                    </div>
                </GlowCard>

                <GlowCard>
                    <h2 className="text-2xl font-bold text-neon-secondary mb-4">9. Third-Party Links</h2>
                    <div className="space-y-4 leading-relaxed">
                        <p>
                            Our Website may contain links to external websites or services that are not operated by us. We have no
                            control over, and assume no responsibility for, the content, privacy policies, or practices of any
                            third-party sites or services. We strongly advise you to review the Privacy Policy of every site you visit.
                        </p>
                    </div>
                </GlowCard>

                <GlowCard>
                    <h2 className="text-2xl font-bold text-neon-secondary mb-4">10. Changes to This Privacy Policy</h2>
                    <div className="space-y-4 leading-relaxed">
                        <p>
                            We reserve the right to update or change our Privacy Policy at any time. Any changes will be effective
                            immediately upon posting the updated Privacy Policy on this page. We will update the &quot;Last updated&quot; date
                            at the bottom of this Privacy Policy.
                        </p>
                        <p>
                            Your continued use of the Service after we post any modifications to the Privacy Policy on this page
                            will constitute your acknowledgment of the modifications and your consent to abide and be bound by
                            the modified Privacy Policy.
                        </p>
                    </div>
                </GlowCard>

                <GlowCard>
                    <h2 className="text-2xl font-bold text-neon-secondary mb-4">11. Contact Information</h2>
                    <div className="space-y-4 leading-relaxed">
                        <p>
                            If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices,
                            you may contact us at:
                        </p>
                        <Link
                            href="mailto:admin@greyletters.com"
                            className="inline-block text-neon-primary hover:text-neon-secondary transition-colors"
                        >
                            admin@greyletters.com
                        </Link>
                        <p className="text-sm text-text-dim mt-4">
                            Please note that as we do not collect personal data, we may be unable to respond to requests regarding
                            personal data that we do not possess.
                        </p>
                    </div>
                </GlowCard>

                <GlowCard>
                    <h2 className="text-2xl font-bold text-neon-secondary mb-4">12. Governing Law</h2>
                    <div className="space-y-4 leading-relaxed">
                        <p>
                            This Privacy Policy shall be governed by and construed in accordance with applicable laws, without
                            regard to conflict of law provisions. Any disputes arising under or in connection with this Privacy
                            Policy shall be subject to the exclusive jurisdiction of the competent courts.
                        </p>
                    </div>
                </GlowCard>

                <div className="text-center text-text-dim text-sm pt-8 space-y-1">
                    <p>Last updated: December 2025</p>
                    <p>Effective date: December 2025</p>
                    <p className="text-xs mt-4">Version 1.0</p>
                </div>
            </div>
        </Container>
    );
}
