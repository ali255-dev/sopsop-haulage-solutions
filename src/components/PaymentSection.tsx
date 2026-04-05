import { CreditCard, Building2, Smartphone } from "lucide-react";

const PaymentSection = () => {
  return (
    <section id="payment" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold uppercase tracking-widest text-sm">How To Pay</span>
          <h2 className="text-4xl md:text-6xl text-foreground mt-3">PAYMENT DETAILS</h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Convenient payment options for all our customers. Pay via M-Pesa or bank transfer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* M-Pesa Paybill */}
          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <div className="bg-primary p-6 flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                <Smartphone className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-2xl text-primary-foreground">M-PESA PAYBILL</h3>
                <p className="text-primary-foreground/80 text-sm">Lipa na M-Pesa</p>
              </div>
            </div>
            <div className="p-8 space-y-5">
              <div className="flex justify-between items-center border-b border-border pb-4">
                <span className="text-muted-foreground font-medium">Business Number</span>
                <span className="text-foreground font-bold text-xl font-heading tracking-wider">247247</span>
              </div>
              <div className="flex justify-between items-center border-b border-border pb-4">
                <span className="text-muted-foreground font-medium">Account Number</span>
                <span className="text-foreground font-bold text-xl font-heading tracking-wider">SOPSOP001</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground font-medium">Business Name</span>
                <span className="text-foreground font-semibold">SOPSOP Transport</span>
              </div>
            </div>
          </div>

          {/* Bank Account */}
          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <div className="bg-secondary p-6 flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-secondary-foreground/10 flex items-center justify-center">
                <Building2 className="w-7 h-7 text-secondary-foreground" />
              </div>
              <div>
                <h3 className="text-2xl text-secondary-foreground">BANK ACCOUNT</h3>
                <p className="text-secondary-foreground/60 text-sm">Direct Transfer</p>
              </div>
            </div>
            <div className="p-8 space-y-5">
              <div className="flex justify-between items-center border-b border-border pb-4">
                <span className="text-muted-foreground font-medium">Bank Name</span>
                <span className="text-foreground font-semibold">Equity Bank</span>
              </div>
              <div className="flex justify-between items-center border-b border-border pb-4">
                <span className="text-muted-foreground font-medium">Account Name</span>
                <span className="text-foreground font-semibold">SOPSOP Transport Ltd</span>
              </div>
              <div className="flex justify-between items-center border-b border-border pb-4">
                <span className="text-muted-foreground font-medium">Account Number</span>
                <span className="text-foreground font-bold text-xl font-heading tracking-wider">0123456789</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground font-medium">Branch</span>
                <span className="text-foreground font-semibold">Mombasa</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full text-sm font-medium">
            <CreditCard className="w-4 h-4" />
            Always confirm payment with our team before delivery
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentSection;
