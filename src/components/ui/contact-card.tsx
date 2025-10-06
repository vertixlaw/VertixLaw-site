import React from 'react';
import { cn } from '../../lib/utils';
import {
	LucideIcon,
} from 'lucide-react';

type ContactInfoProps = React.ComponentProps<'div'> & {
	icon: LucideIcon;
	label: string;
	value: string;
};

type ContactCardProps = React.ComponentProps<'div'> & {
	// Content props
	title?: string;
	description?: string;
	contactInfo?: ContactInfoProps[];
	formSectionClassName?: string;
};

export function ContactCard({
	title = 'Contact With Us',
	description = 'If you have any questions regarding our Services or need help, please fill out the form here. We do our best to respond within 1 business day.',
	contactInfo,
	className,
	formSectionClassName,
	children,
	...props
}: ContactCardProps) {
	return (
		<div
			className={cn(
				'bg-white relative grid h-full w-full md:grid-cols-2',
				className,
			)}
			{...props}
		>
			<div
				className={cn(
					'bg-gray-50 flex h-full w-full items-center p-8',
					formSectionClassName,
				)}
			>
				{children}
			</div>
			<div className="flex flex-col justify-start p-8 -mt-8">
				<div className="space-y-5">
					<h1 className="text-3xl font-bold md:text-4xl">
						{title}
					</h1>
					<p className="text-gray-600 text-base md:text-lg max-w-lg">
						{description}
					</p>
					<div className="space-y-4">
						{contactInfo?.map((info, index) => (
							<ContactInfo key={index} {...info} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

function ContactInfo({
	icon: Icon,
	label,
	value,
	className,
	...props
}: ContactInfoProps) {
	return (
		<div className={cn('flex items-center gap-5', className)} {...props}>
			<div className="bg-gray-100 rounded-lg p-4">
				<Icon className="h-6 w-6" />
			</div>
			<div>
				<p className="font-medium text-lg">{label}</p>
				<p className="text-gray-500 text-base">{value}</p>
			</div>
		</div>
	);
}
