import PurchaseItem, { type PurchaseItemProps } from "../pages/purchases/purchase-history/PurchaseItem";
import RequestItem, { type RequestItemProps } from "../pages/requests/request-history/RequestItem";

interface HistorySidebarProps {
    title: string;
    purchases?: PurchaseItemProps[];
    requests?: RequestItemProps[];
}

export default function HistorySidebar({ title, purchases, requests }: HistorySidebarProps) {


    return (
        <aside
            className="w-full md:w-[400px] h-full overflow-y-auto border rounded-xl p-4"
            style={{
                backgroundColor: "#F9FBFC",
                borderColor: "#BABABA",
            }}
        >
            <h2
                className="hidden md:block text-md font-medium text-center mb-4"
                style={{ color: "#4A4848" }}
            >
                {title}
            </h2>
            {purchases?.map((p) => (
                <PurchaseItem key={p.id} {...p} />
            ))}
            {requests?.map((req) => (
                <RequestItem key={req.id} {...req} />
            ))}
        </aside>
    );
}