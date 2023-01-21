import {classNames} from '@/util/helper-functions'
import {Review} from '@/util/interfaces'
import {StarIcon} from '@heroicons/react/solid'
import React from 'react'
import {useTranslation} from 'react-i18next'

//Review table. Data will need to be shared with Review Filters. Data received from Review Page

function ReviewTable({data}: {data: Review[]}): JSX.Element {
	const {t} = useTranslation()
	const date = new Date()

	if (data.length) {
		return (
			<div>
				<div className="max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
					<div className="mt-6 pb-10 border-t border-b border-gray-200 divide-y divide-gray-200 space-y-10">
						{data.map((review) => {
							const ratings = [
								{title: t('reviews.health'), rating: review.health},
								{title: t('reviews.respect'), rating: review.respect},
								{title: t('reviews.privacy'), rating: review.privacy},
								{title: t('reviews.repair'), rating: review.repair},
								{title: t('reviews.stability'), rating: review.stability},
							]
							return (
								<div
									key={review.id}
									className="pt-10 lg:grid lg:grid-cols-12 lg:gap-x-8"
								>
									<div className="mt-6 flex flex-wrap items-center text-sm lg:mt-0 lg:col-start-1 lg:col-span-4 lg:row-start-1 lg:flex-col lg:items-start xl:col-span-3">
										<p className="font-medium text-lg w-full mb-4 lg:mb-0">
											{review.landlord}
										</p>
										<div className="mb-4 lg:mb-0 flex items-center w-full">
											{[0, 1, 2, 3, 4].map((star) => {
												let totalReview = 0
												for (let i = 0; i < ratings.length; i++) {
													totalReview += parseInt(ratings[i].rating)
												}
												const avgRating = totalReview / ratings.length
												return (
													<StarIcon
														key={star}
														className={classNames(
															avgRating > star
																? 'text-yellow-400'
																: 'text-gray-200',
															'h-5 w-5 flex-shrink-0',
														)}
														aria-hidden="true"
													/>
												)
											})}
										</div>
										<p className="text-gray-500 lg:ml-0 lg:mt-2 lg:border-0 lg:pl-0 w-full">{`${review.city}, ${review.state}, ${review.countrycode}, ${review.zip}`}</p>
										<p className="mb-4 lg:mb-0 text-gray-500 lg:ml-0 lg:mt-2 lg:border-0 lg:pl-0">
											{`${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`}
										</p>
									</div>
									<div className="lg:col-start-5 lg:col-span-8 xl:col-start-4 xl:col-span-9 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:items-start">
										<div className="flex flex-wrap flex-row items-center xl:col-span-1">
											{ratings.map((rating) => {
												return (
													<div key={rating.title} className="mx-2 my-1">
														<p>{rating.title}</p>
														<div className="flex items-center">
															{[0, 1, 2, 3, 4].map((star) => (
																<StarIcon
																	key={star}
																	className={classNames(
																		parseInt(rating.rating) > star
																			? 'text-yellow-400'
																			: 'text-gray-200',
																		'h-5 w-5 flex-shrink-0',
																	)}
																	aria-hidden="true"
																/>
															))}
														</div>
													</div>
												)
											})}
										</div>

										<div className="mt-4 lg:mt-6 xl:mt-0 xl:col-span-2">
											<p>{t('reviews.review')}</p>

											<div
												className="mt-3 space-y-6 text-sm text-gray-500"
												dangerouslySetInnerHTML={{__html: review.review}}
											/>
										</div>
									</div>
								</div>
							)
						})}
					</div>
				</div>
			</div>
		)
	} else {
		return <></>
	}
}

export default ReviewTable
