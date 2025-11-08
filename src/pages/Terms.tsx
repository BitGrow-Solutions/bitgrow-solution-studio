import { Layout } from '@/components/layout/Layout';
import { Section } from '@/components/sections/Section';

export default function Terms() {
  return (
    <Layout>
      <Section className="py-24">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground">
              By accessing and using BitGrow Solutions's services, you accept and agree to be bound by the
              terms and provision of this agreement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Services Description</h2>
            <p className="text-muted-foreground">
              BitGrow Solutions provides software development, consulting, and related technology services.
              We reserve the right to modify, suspend, or discontinue any part of our services at any time.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. User Responsibilities</h2>
            <p className="text-muted-foreground mb-4">You agree to:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Not use our services for any unlawful purpose</li>
              <li>Not interfere with or disrupt our services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Intellectual Property</h2>
            <p className="text-muted-foreground">
              Unless otherwise agreed in writing, all deliverables created by BitGrow Solutions remain our
              intellectual property until full payment is received. Upon payment, ownership transfers to
              the client as specified in the project agreement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Payment Terms</h2>
            <p className="text-muted-foreground">
              Payment terms are specified in individual project agreements. Late payments may result in
              suspension of services and may incur additional fees.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Confidentiality</h2>
            <p className="text-muted-foreground">
              We maintain strict confidentiality of all client information and project details. We will
              not disclose confidential information to third parties without explicit consent.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
            <p className="text-muted-foreground">
              BitGrow Solutions shall not be liable for any indirect, incidental, special, consequential,
              or punitive damages resulting from your use of our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Termination</h2>
            <p className="text-muted-foreground">
              Either party may terminate services with written notice as specified in the project agreement.
              We reserve the right to terminate or suspend access to our services immediately for violations
              of these terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Governing Law</h2>
            <p className="text-muted-foreground">
              These terms shall be governed by and construed in accordance with the laws of Indonesia,
              without regard to its conflict of law provisions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Contact Information</h2>
            <p className="text-muted-foreground">
              For questions about these Terms of Service, please contact us at hello@bitgrow.id
            </p>
          </section>
        </div>
      </Section>
    </Layout>
  );
}
