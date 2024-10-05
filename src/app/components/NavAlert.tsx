import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import ContactSheet from "@/app/components/ContactSheet";

export function NavAlert() {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button>Contact Us</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <ContactSheet/>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
