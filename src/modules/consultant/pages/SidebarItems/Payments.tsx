import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
    ChevronsLeft,
    ChevronLeft,
    ChevronRight,
    ChevronsRight,
} from "lucide-react";
import profile from "@/assets/profile.png"

export default function Payments() {
    const summaries = [
        { title: "Current Balance", value: "₹ 2.00" },
        { title: "Total Income", value: "₹ 2.00" },
        { title: "Last Quarter", value: "₹ 2.00" },
        { title: "Last Month", value: "NA" },
        { title: "Settled Amount", value: "NA" },
    ];

    const rows = Array(7).fill({
        sr: "1.",
        date: "02 Aug 2024",
        name: "Paramjeet Singh",
        avatar: profile,
        platform: "Alpheric",
        time: "Aug 11, 12:00 AM IST",
        amount: "₹ 16.00",
        fees: "₹ 0.00",
        payout: "₹ 16.00",
    });

    return (
        <section className="p-6 space-y-8 font-poppins border mt-20 rounded-2xl bg-white">
            {/* Title */}
            <div className="flex items-center gap-2 w-full ">
                <h2 className="text-[24px] whitespace-nowrap">Payments</h2>
                <Separator className="bg-[#FFCB07] flex-1" />
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
                {summaries.map((s) => (
                    <div key={s.title} className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow bg-white">
                        <div className="text-sm text-gray-500 mb-1">
                            {s.title}
                        </div>
                        <div className="text-2xl font-medium">
                            {s.value}
                        </div>
                    </div>
                ))}
            </div>

            {/* Main content */}
            <div className="md:flex md:space-x-5">
                {/* Left: Transactions table */}
                <Card className="flex-1">
                    <CardContent className="overflow-x-auto ">
                        <Table>
                            <TableCaption>Recent Transactions for Aimshala</TableCaption>
                            <TableHeader className="">
                                <TableRow className=" rounded-sm">
                                    <TableHead className="bg-[#94278F]/30 rounded-tl-sm">Sr No.</TableHead>
                                    <TableHead className="bg-[#94278F]/30">Date</TableHead>
                                    <TableHead className="bg-[#94278F]/30">Mentee Name</TableHead>
                                    <TableHead className="bg-[#94278F]/30">Amount</TableHead>
                                    <TableHead className="bg-[#94278F]/30">Platform fees</TableHead>
                                    <TableHead className="bg-[#94278F]/30 rounded-tr-sm">Payout amount</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody className="border rounded-2xl">
                                {rows.map((r, idx) => (
                                    <TableRow key={idx}>
                                        <TableCell className="font-medium">{r.sr}</TableCell>
                                        <TableCell>{r.date}</TableCell>
                                        <TableCell>
                                            <div className="flex items-center space-x-2">
                                                <img
                                                    src={r.avatar}
                                                    alt={r.name}
                                                    className="h-8 w-8 rounded-full object-cover"
                                                />
                                                <div className="space-y-0.5">
                                                    <p className="font-medium">{r.name}</p>
                                                    <p className="text-xs text-gray-500">{r.platform}</p>
                                                    <p className="text-xs text-gray-400">{r.time}</p>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell>{r.amount}</TableCell>
                                        <TableCell>{r.fees}</TableCell>
                                        <TableCell>{r.payout}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>

                    {/* Pagination */}
                    <div className="flex items-center justify-between px-6 py-4 border-t">
                        <div className="flex items-center space-x-2">
                            <Button variant="outline" size="icon">
                                <ChevronsLeft className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="icon">
                                <ChevronLeft className="h-4 w-4" />
                            </Button>
                            <Button variant="secondary">1</Button>
                            <Button variant="outline" size="icon">
                                <ChevronRight className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="icon">
                                <ChevronsRight className="h-4 w-4" />
                            </Button>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span>Jump to</span>
                            <Input type="number" defaultValue={2} className="w-16" />
                        </div>
                    </div>
                </Card>

                {/* Right side: Payment Details & Guidelines */}
                <div className="w-full md:w-1/3 space-y-2">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-[20px]">Payment Details</CardTitle>
                        </CardHeader>
                        <CardContent className="">
                            <dl className="space-y-1">
                                <div>
                                    <dt className="text-xs text-gray-500">Account holder's name</dt>
                                    <dd>Saving Account</dd>
                                </div>
                                <div>
                                    <dt className="text-xs text-gray-500">Account type</dt>
                                    <dd>2140000204116466</dd>
                                </div>
                                <div>
                                    <dt className="text-xs text-gray-500">Account number</dt>
                                    <dd>PUNB03I4000</dd>
                                </div>
                                <div>
                                    <dt className="text-xs text-gray-500">IFSC code</dt>
                                    <dd>MMRS3004J</dd>
                                </div>
                                <div>
                                    <dt className="text-xs text-gray-500">PAN card</dt>
                                    <dd>MMRS3004J</dd>
                                </div>
                            </dl>
                            <Button className="mt-4 inline-flex justify-center items-center bg-[#93268F] rounded-[8px] ">Update Information</Button>
                        </CardContent>
                    </Card>

                    {/* Guidelines */}
                    <Card>
                        <CardHeader className="text-[20px] font-semibold ">Guidelines</CardHeader>
                        <CardContent className="">
                            <ol className="list-decimal list-inside space-y-1 text-gray-600">
                                <li>You can add your account details here.</li>
                                <li>
                                    Please note that the payments won't be processed if this section
                                    is not completed.
                                </li>
                            </ol>
                            <Button variant="link" className=" px-0 text-[#94278F]">
                                View More
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
