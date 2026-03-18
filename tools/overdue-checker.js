// Overdue Payment Checker for 513 Sips
// Run this during heartbeat checks to alert Eddie about late payments

const SUPABASE_URL = 'https://bixyltkdymoqjipaiujk.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJpeHlsdGtkeW1vcWppcGFpdWprIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM3OTY0MTMsImV4cCI6MjA4OTM3MjQxM30.xqaK35aar9lSweeTA8ydeW8WT8ZiOrOl5NFa957MkjU';

async function checkOverduePayments() {
    try {
        const response = await fetch(`${SUPABASE_URL}/rest/v1/ar_entries?status=eq.pending&due_date=lt.${new Date().toISOString().split('T')[0]}&select=*,events(client_name,event_date,total_amount)&order=due_date`, {
            headers: {
                'apikey': SUPABASE_KEY,
                'Authorization': `Bearer ${SUPABASE_KEY}`
            }
        });
        
        if (!response.ok) throw new Error('Failed to fetch');
        
        const overduePayments = await response.json();
        
        if (overduePayments.length === 0) {
            return { hasOverdue: false, message: 'No overdue payments' };
        }
        
        // Format alert message
        let totalOverdue = 0;
        const lines = overduePayments.map(p => {
            const daysOverdue = Math.floor((new Date() - new Date(p.due_date)) / (1000 * 60 * 60 * 24));
            totalOverdue += p.amount;
            return `• ${p.events.client_name} — $${p.amount.toLocaleString()} (${p.entry_type})\n  ${daysOverdue} days overdue (Due: ${new Date(p.due_date).toLocaleDateString()})`;
        });
        
        const message = `⚠️ OVERDUE PAYMENT ALERT\n\n${lines.join('\n\n')}\n\n💰 Total Outstanding: $${totalOverdue.toLocaleString()}`;
        
        return {
            hasOverdue: true,
            count: overduePayments.length,
            totalAmount: totalOverdue,
            message: message,
            payments: overduePayments
        };
        
    } catch (err) {
        console.error('Error checking overdue payments:', err);
        return { hasOverdue: false, error: err.message };
    }
}

// For use in heartbeat
// checkOverduePayments().then(result => {
//     if (result.hasOverdue) {
//         // Send Telegram alert to Eddie
//         console.log(result.message);
//     }
// });

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { checkOverduePayments };
}